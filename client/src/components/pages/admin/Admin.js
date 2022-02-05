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
          <h1>Espace administrateur</h1>
          <NavLink to="/api/news/admin/news" className='nav-link'> News admin </NavLink>
          <NavLink to="/api/gallery/admin/gallery" className='nav-link'> Galerie admin </NavLink>
          <Logout />
        </div>
      ) : (
        <div className="connection-form">
          <div className="form-container">
            <SignInForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;