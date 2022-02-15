import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import axios from "axios";
import { Route, Switch, Redirect } from 'react-router-dom';
import { UidContext } from "./components/general/AppContext";
import { getUser } from './store/actions/users.actions';
import {  Header,
          Footer, 
          Home, 
          Gallery, 
          Contact, 
          Legal, 
          Admin, 
          Inscription,
          CrudNews,
          CrudGallery
         } from './components/';

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);
  

  return (
    <div className="App">
      <UidContext.Provider value={uid}>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/conditions" component={Legal} />
          <Route path="/admin" component={Admin} />
          <Route path="/api/news/admin/news" component={CrudNews} />
          <Route path="/api/gallery/admin/gallery" component={CrudGallery} />
          <Route path="/create_profile" component={Inscription} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </UidContext.Provider>
    </div>
  );
}

export default App;
