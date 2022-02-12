import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SignInForm from "./logique/SignInForm.js";
import Logout from "./logique/Logout.js";
import { UidContext } from "../../general/AppContext";

const Admin = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <div className="admin">
          <h1 className="d-flex justify-content-center pt-5 pb-3">Espace administrateur</h1>
          <hr />
          <NavLink to="/api/news/admin/news" className='nav-link d-block mx-auto text-center buttonadmin pt-3 my-4'> Gestion des News </NavLink>
          <NavLink to="/api/gallery/admin/gallery" className='nav-link d-block mx-auto text-center buttonadmin pt-3'> Gestion Galerie </NavLink>
          <Logout />
        </div>
      ) : (
        <div className="connection-form">
          <div className="form-container loginform">
            <h3 className="d-flex justify-content-center pt-5 pb-3">Authentification administrateur</h3>
            <hr />
            <SignInForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;