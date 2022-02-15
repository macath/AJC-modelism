import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
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
                <div id="carouselExampleControls" className="carousel slide homepic" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2500">
                            <img src={`${window.location.origin}/images/carousel1.jpg`} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={`${window.location.origin}/images/carousel2.jpg`} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={`${window.location.origin}/images/carousel3.jpg`} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={`${window.location.origin}/images/carousel4.jpg`} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        );
    }
}