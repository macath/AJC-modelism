import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="headernav navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href='/'> <img src={`${window.location.origin}/images/logo.png`} alt="home" className="img-fluid w-25 logoajc" />AJC Modélisme</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className='nav-link px-5'> Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/gallery" className='nav-link px-5'> Galerie </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className='nav-link px-5'> Contact </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </header>
        );
    }
}