import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "../../general/utils/Utils";
import { getNews } from "../../../store/actions/news.actions";
import HomeNews from "./HomeNews";

const Home = () => {
    const [loadNews, setLoadNews] = useState(true);
    const [count, setCount] = useState(3);
    const dispatch = useDispatch();
    const news = useSelector((state) => state.newsReducer);

    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
            setLoadNews(true);
        }
    }

    useEffect(() => {
        if (loadNews) {
            dispatch(getNews(count));
            setLoadNews(false);
            setCount(count + 3);
        }

        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);
    }, [loadNews, dispatch, count]);


    return (
        <div className="home">
            <div className="contpresentation">
                <h1 className="d-flex justify-content-center pt-5 pb-3">Qui sommes nous</h1>
                <hr />
                <p className="pt-4 d-block mx-auto presentation pb-5">Magasin de modelisme, de maquettes, et de tout ce qui est radiocommandé, AJC Modelisme vous offre un espace dans lequel vous pouvez acheter, faire réparer et même essayer vos véhicules ! Et tout ça dans la bonne humeur !</p>
            </div>
            <h1 className="d-flex justify-content-center pt-5 pb-3">News</h1>
            <hr />
            <ul className="pt-4">
                {!isEmpty(news[0]) &&
                    news.map((news) => {
                        return <HomeNews news={news} key={news._id} />;
                    })
                }
            </ul>
        </div>
    );
};

export default Home;