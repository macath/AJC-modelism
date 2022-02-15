import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { store } from './store'
import { getUsers } from "./store/actions/users.actions";
import { getNews } from "./store/actions/news.actions";
import { getGallery } from "./store/actions/gallery.actions";

store.dispatch(getUsers());
store.dispatch(getNews());
store.dispatch(getGallery());

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
};

const ScrollToTopWithRouter = withRouter(ScrollToTop);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ScrollToTopWithRouter>
          <App />
        </ScrollToTopWithRouter>
      </Provider>
    </Router>
  </React.StrictMode>
  , document.getElementById('root')
);
