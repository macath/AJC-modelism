import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../general/utils/Utils";
import Loader from "../../general/utils/Loading";

const HomeNews = ({ news }) => {
    const [isLoading, setIsLoading] = useState(true);
    const newsData = useSelector((state) => state.newsReducer);

    useEffect(() => {
        !isEmpty(newsData[0]) && setIsLoading(false);
    }, [newsData]);

    return (
        <li className="card-container cardstyle mb-5 d-block mx-auto" key={news._id}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="card-right">
                        <div className="card-header">
                        <h3 className="d-flex justify-content-center textmargin">{news.title}</h3>
                        </div>
                        <p className="d-flex justify-content-center textmargin">{news.message}</p>
                        {news.picture && (
                            <img src={`${window.location.origin}/uploads/${news.picture}`} alt="card-pic" className="rounded mx-auto d-block card-pic" />
                        )}
                        {news.video && (
                            <iframe
                                src={news.video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={news._id}
                                className="d-block mx-auto cardvid"
                            ></iframe>
                        )}
                        <span className="d-flex justify-content-end pt-4 pb-1 pe-5 cardate">{dateParser(news.createdAt)}</span>
                    </div>
                </>
            )}
        </li>
    );
};

export default HomeNews;