import axios from "axios";

// gallery
export const GET_GALLERY = "GET_GALLERY";
export const GET_ALL_GALLERY = "GET_ALL_GALLERY";
export const ADD_GALLERY = "ADD_GALLERY";
export const UPDATE_GALLERY = "UPDATE_GALLERY";
export const DELETE_GALLERY = "DELETE_GALLERY";

// errors
export const GET_GALLERY_ERRORS = "GET_GALLERY_ERRORS";

export const getGallery = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/gallery/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_GALLERY, payload: array });
        dispatch({ type: GET_ALL_GALLERY, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addGallery = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/gallery/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_GALLERY_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_GALLERY_ERRORS, payload: "" });
        }
      });
  };
};

export const updateGallery = (galleryId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/gallery/${galleryId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_GALLERY, payload: { message, galleryId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteGallery = (galleryId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/gallery/${galleryId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_GALLERY, payload: { galleryId } });
      })
      .catch((err) => console.log(err));
  };
};