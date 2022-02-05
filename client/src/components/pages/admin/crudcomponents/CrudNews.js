import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../../store/actions/news.actions";
import Card from "./Card";
import { isEmpty } from "../../../general/utils/Utils";
import NewNewsForm from "../logique/NewNewsForm";

const CrudNews = () => {
  const [loadNews, setLoadNews] = useState(true);
  const [count, setCount] = useState(5);
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
      setCount(count + 5);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadNews, dispatch, count]);

  return (
    <div className="thread-container">
      <NewNewsForm />
      <ul>
        {!isEmpty(news[0]) &&
          news.map((news) => {
            return <Card news={news} key={news._id} />;
          })}
      </ul>
    </div>
  );
};

export default CrudNews;