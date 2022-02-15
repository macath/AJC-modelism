import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, timestampParser } from "../../../general/utils/Utils";
import { addNews, getNews } from "../../../../store/actions/news.actions";
import Loader from "../../../general/utils/Loading";

const NewNewsForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [newsPicture, setNewsPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.usersReducer);
  const newsData = useSelector((state) => state.newsReducer);
  const error = useSelector((state) => state.errorsReducer.newsError);
  const dispatch = useDispatch();
  
  const handlePost = async () => {
    if (title || message || newsPicture || video) {
      const data = new FormData();
      data.append('writterId', userData._id);
      data.append('message', message);
      data.append('title', title);
      if (file) data.append("file", file);
      data.append('video', video);

      await dispatch(addNews(data));
      dispatch(getNews());
      cancelPost();
    } else {
      alert("Veuillez entrer un message")
    }
  };
 
  const handlePicture = (e) => {
    setNewsPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo('');
  }; 

  const cancelPost = () => {
    setTitle("");
    setMessage("");
    setNewsPicture("");
    setVideo("");
    setFile("");
  };


  useEffect(() => {
    if (!isEmpty(newsData[0])) setIsLoading(false);

    const handleVideo = () => {
      let findLink = message.split(" ");
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes("https://www.yout") ||
          findLink[i].includes("https://yout")
        ) {
          let embed = findLink[i].replace("watch?v=", "embed/");
          setVideo(embed.split("&")[0]);
          findLink.splice(i, 1);
          setMessage(findLink.join(" "));
          setNewsPicture('');
        }
      }
    };
    handleVideo();
  }, [newsData, message, title, video]);

  return (
    <div className="post-container d-flex justify-content-center">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="post-form admincard pt-3 mb-5">
          <textarea
              name="title"
              id="title"
              placeholder="Titre"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="d-block mx-auto my-3 textcard"
            />
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="d-block mx-auto mb-2 textcard"
            />
            {message || newsPicture || video.length > 20 ? (
              <li className="card-container">
                <div className="card-right">
                  <div className="content">
                    <p className="d-flex justify-content-center textmargin">{message}</p>
                    <img src={newsPicture} alt="" className="img-fluid w-50 d-block mx-auto" />
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="d-block mx-auto cardvid"
                        title={video}
                      ></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}
            <span className="d-flex justify-content-end pt-4 pb-1 pe-5 cardate">{timestampParser(Date.now())}</span>
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <p className="text-center">C'est vide pour l'instant</p>
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handlePicture(e)}
                      className="d-block mx-auto"
                    />
                  </>
                )}
                
                {video && (
                  <button className="d-block mx-auto" onClick={() => setVideo("")}>Supprimer video</button>
                )}
              </div>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
              <div className="btn-send">
                {message || newsPicture || video.length > 20 ? (
                  <button className="cancel d-block mx-auto" onClick={cancelPost}>
                    Annuler news
                  </button>
                ) : null}
                <button className="btn btn-success send d-block mx-auto my-3" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewNewsForm;