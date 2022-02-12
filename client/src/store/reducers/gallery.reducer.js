import {
  GET_GALLERY,
  GET_ALL_GALLERY,
  UPDATE_GALLERY,
  DELETE_GALLERY
} from "../actions/gallery.actions";

const initialState = {};

export default function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GALLERY:
    case GET_ALL_GALLERY:
      return action.payload;
    case UPDATE_GALLERY:
      return state.map((gallery) => {
        if (gallery._id === action.payload.galleryId) {
          return {
            ...gallery,
            message: action.payload.message,
          };
        } else return gallery;
      });
    case DELETE_GALLERY:
      return state.filter((gallery) => gallery._id !== action.payload.galleryId);
    default:
      return state;
  }
}