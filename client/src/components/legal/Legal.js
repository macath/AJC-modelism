import React from "react";
import { NavLink } from "react-router-dom";

const Legal = () => {

    return (
        <div className="legal">
            <h1>Conditions générales</h1>

            <li className="nav-item">
                <NavLink to="/admin" className='nav-link'> Espace administrateur </NavLink>
            </li>
        </div>
    );
};

export default Legal;