import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../../general/utils/Utils";
import { updateNews } from "../../../../store/actions/news.actions";
import DeleteCard from "./DeleteCard";
import Loader from "../../../general/utils/Loading";

const Card = ({ news }) => {
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
        <li className="card-container" key={news._id}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="card-right">
                        <div className="card-header">
                        {isUpdated === false && <h3>{news.title}</h3>}
                        {isUpdated && (
                            <div className="update-title">
                                <textarea
                                    defaultValue={news.title}
                                    onChange={(e) => setTextUpdate(e.target.value)}
                                />
                            </div>
                        )}
                            <span>{dateParser(news.createdAt)}</span>
                        </div>
                        {isUpdated === false && <p>{news.message}</p>}
                        {isUpdated && (
                            <div className="update-post">
                                <textarea
                                    defaultValue={news.message}
                                    onChange={(e) => setTextUpdate(e.target.value)}
                                />
                                <div className="button-container">
                                    <button className="btn btn-success" onClick={updateItem}>
                                        Valider modification
                                    </button>
                                </div>
                            </div>
                        )}
                        {news.picture && (
                            <img src={`${window.location.origin}/uploads/${news.picture}`} alt="card-pic" className="card-pic" />
                        )}
                        {news.video && (
                            <iframe
                                width="500"
                                height="300"
                                src={news.video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={news._id}
                            ></iframe>
                        )}
                        <div className="button-container">
                            <button className="btn btn-primary" onClick={() => setIsUpdated(!isUpdated)}>Edit</button>
                            <DeleteCard id={news._id} />
                        </div>
                    </div>
                </>
            )}
        </li>
    );
};

export default Card;
