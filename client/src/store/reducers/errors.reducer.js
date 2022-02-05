import { GET_NEWS_ERRORS } from "../actions/news.actions";
import { GET_GALLERY_ERRORS } from "../actions/gallery.actions";

const initialState = { newsError: [], galleryError: [] };

export default function errorsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GALLERY_ERRORS:
            return {
                newsError: action.payload,
                galleryError: []
            }
        case GET_NEWS_ERRORS:
            return {
                userError: action.payload,
                newsError: []
            }
        default:
            return state;
    }
}