import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../../general/utils/Utils";
import { updateNews } from "../../../../store/actions/news.actions";
import DeleteNewsCard from "./DeleteNewsCard";
import Loader from "../../../general/utils/Loading";

const NewsCard = ({ news }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const newsData = useSelector((state) => state.newsReducer);
    const dispatch = useDispatch();

    const updateItem = () => {
        if (textUpdate) {
            dispatch(updateNews(news._id, textUpdate));
        }
        setIsUpdated(false);
    };

    useEffect(() => {
        !isEmpty(newsData[0]) && setIsLoading(false);
    }, [newsData]);

    return (
        <li className="card-container admincard mb-5 d-block mx-auto" key={news._id}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="card-right">
                        <div className="card-header">
                            {isUpdated === false && <h3 className="d-flex justify-content-center">{news.title}</h3>}
                            {isUpdated && (
                                <div className="update-title">
                                    <textarea
                                        defaultValue={news.title}
                                        onChange={(e) => setTextUpdate(e.target.value)}
                                        className="d-block mx-auto"
                                    />
                                </div>
                            )}
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary me-2" onClick={() => setIsUpdated(!isUpdated)}>Edit</button>
                                <DeleteNewsCard id={news._id} />
                            </div>
                        </div>
                        {isUpdated === false && <p className="d-flex justify-content-center textmargin">{news.message}</p>}
                        {isUpdated && (
                            <div className="update-post">
                                <textarea
                                    defaultValue={news.message}
                                    onChange={(e) => setTextUpdate(e.target.value)}
                                    className="d-block mx-auto mb-2 textcard"
                                />
                                <div className="button-container">
                                    <button className="btn btn-success d-block mx-auto mb-2" onClick={updateItem}>
                                        Valider modification
                                    </button>
                                </div>
                            </div>
                        )}
                        {news.picture && (
                            <img src={`${window.location.origin}/uploads/${news.picture}`} alt="card-pic" className="rounded mx-auto d-block card-pic" />
                        )}
                        {news.video && (
                            <iframe
                                src={news.video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="d-block mx-auto cardvid"
                                title={news._id}
                            ></iframe>
                        )}
                        <div className="button-container">

                            <span className="d-flex justify-content-end pt-4 pb-1 pe-5 cardate">{dateParser(news.createdAt)}</span>
                        </div>
                    </div>
                </>
            )}
        </li>
    );
};

export default NewsCard;
