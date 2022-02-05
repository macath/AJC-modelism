import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

// Reducers
import usersReducer from './reducers/users.reducer';
import newsReducer from './reducers/news.reducer';
import galleryReducer from './reducers/gallery.reducer';
import errorsReducer from './reducers/errors.reducer';

const appReducer = combineReducers({
  usersReducer,
  newsReducer,
  galleryReducer,
  errorsReducer
});

const middlewares = [thunkMiddleware];

export const store = createStore(appReducer, applyMiddleware(...middlewares));