import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href='/'>AJC Modélisme</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className='nav-link'> Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/gallery" className='nav-link'> Galerie </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className='nav-link'> Contact </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </header>
        );
    }
}