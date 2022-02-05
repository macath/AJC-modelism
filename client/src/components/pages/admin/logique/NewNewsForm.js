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
    <div className="post-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="post-form">
          <textarea
              name="title"
              id="title"
              placeholder="le titre"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {message || newsPicture || video.length > 20 ? (
              <li className="card-container">
                <div className="card-right">
                  <div className="card-header">
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    <img src={newsPicture} alt="" />
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video}
                      ></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <p>C'est vide pour l'instant</p>
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handlePicture(e)}
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo("")}>Supprimer video</button>
                )}
              </div>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
              <div className="btn-send">
                {message || newsPicture || video.length > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler news
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
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