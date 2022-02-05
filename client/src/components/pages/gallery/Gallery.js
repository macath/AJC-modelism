import React from "react";
import { NavLink } from "react-router-dom";

const Gallery = () => {

    return (
        <>
            <div className="gallery">
                <h1>Galerie</h1>
            </div>

            <li className="nav-item">
                <NavLink to="/conditions" className='nav-link'> Conditions générales </NavLink>
            </li>
        </>

    );
};

export default Gallery;