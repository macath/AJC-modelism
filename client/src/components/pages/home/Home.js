import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <h1>Présentation</h1>
            <br />
            <br />
            <br />
            <h1>News</h1>

            <li className="nav-item">
                <NavLink to="/conditions" className='nav-link'> Conditions générales </NavLink>
            </li>
        </div>
    );
};

export default Home;