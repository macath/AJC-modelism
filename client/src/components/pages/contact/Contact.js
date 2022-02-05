import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {

  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
        <h2>coordonnées</h2>
        <h2>plan d'accès</h2>
      </div>

      <li className="nav-item">
        <NavLink to="/conditions" className='nav-link'> Conditions générales </NavLink>
      </li>
    </>
  );

};

export default Contact;