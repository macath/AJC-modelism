import axios from "axios";

// news
export const GET_NEWS = "GET_NEWS";
export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const UPDATE_NEWS = "UPDATE_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";

// errors
export const GET_NEWS_ERRORS = "GET_NEWS_ERRORS";

export const getNews = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/news/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_NEWS, payload: array });
        dispatch({ type: GET_ALL_NEWS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addNews = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/news/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_NEWS_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_NEWS_ERRORS, payload: "" });
        }
      });
  };
};

export const updateNews = (newsId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/news/${newsId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_NEWS, payload: { message, newsId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteNews = (newsId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/news/${newsId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_NEWS, payload: { newsId } });
      })
      .catch((err) => console.log(err));
  };
};
