import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='container-fluid footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <h5 className='d-flex justify-content-center pt-2'>Horaires</h5>
                                <p className='text-center pt-1'>Ouvert du Mardi au Samedi <br /> de 10h00 à 12h00 <br /> et de 14h30 à 19h00</p>
                            </div>
                            <div className='col-lg-4'>
                                <NavLink to="/conditions" className='nav-link d-flex justify-content-center p-5'> Conditions générales </NavLink>
                            </div>
                            <div className='col-lg-4'>
                                <h5 className='d-flex justify-content-center pt-2'>Adresse</h5>
                                <p className='text-center pb-2 pt-1'>909 Av. des Platanes <br /> 34970 Lattes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid footer2'>
                    <span className="pt-2 d-flex justify-content-center copyright">Copyright© AJC Modélisme - Tous droits réservés</span>
                </div>
            </>
        );
    }
}

