import React, { Component, lazy, Suspense } from 'react';
import { Header, Home, Contact, Legal, Admin } from './components/';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavoris } from './store/actions';

const LazyGallery = lazy(() =>
  import(/* webpackChunkName: "Favoris" */'./components/')
);


class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <Suspense fallback={<h1>Chargement ...</h1>}>
          <Switch>
            <Route path="/home" component={ Home } />
            <Route path="/gallery" component={LazyGallery} />
            <Route path="/contact" component={ Contact } />
            <Route path="/conditions" component={ Legal } />
            <Route path="/admin" component={ Admin } />
            <Redirect to="/home" />
          </Switch>
        </Suspense>
      </div>
    );
  }

}

export default withRouter(
  connect(null, {
    fetchFavoris
  })(App)
);
