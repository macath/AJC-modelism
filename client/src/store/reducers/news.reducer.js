import {
    GET_NEWS,
    GET_ALL_NEWS,
    UPDATE_NEWS,
    DELETE_NEWS
} from "../actions/news.actions";

const initialState = {};

export default function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
        case GET_ALL_NEWS:
        return action.payload;
        case UPDATE_NEWS:
            return state.map((news) => {
                if (news._id === action.payload.newsId) {
                    return {
                        ...news,
                        message: action.payload.message,
                    };
                } else return news;
            });
        case DELETE_NEWS:
            return state.filter((news) => news._id !== action.payload.newsId);
        default:
            return state;
    }
}
