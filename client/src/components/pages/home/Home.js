import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../general/utils/Utils";
import HomeNews from "./HomeNews";

const Home = () => {
    const news = useSelector((state) => state.newsReducer);

    return (
        <div className="home">
            <img src={`${window.location.origin}/images/home.jpg`} alt="home" className="img-fluid mt-2 pt-5 homepic" />
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