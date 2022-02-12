import React from "react";

const Contact = () => {

  return (
    <>
      <div className="contact">
        
        <h1 className="d-flex justify-content-center pt-5 pb-3">Contact</h1>
        <hr />
        <img src={`${window.location.origin}/images/alex.jpg`} alt="alex" className="img-thumbnail d-block mx-auto mt-3 contactpic" />
        <p className="text-center pt-3">Si vous souhaitez obtenir plus d'informations, <br /> contactez nous par messenger, sur le facebook du magasin, juste</p>
        <a href="https://www.facebook.com/AJC-Mod%C3%A9lisme-622534634760929" target="_blank" className="d-flex justify-content-center pb-5">ICI</a>
        <h2 className="d-flex justify-content-center pb-3">Coordonnées</h2>
        <hr />
        <p className="text-center pt-3">Vous pouvez également nous contacter par téléphone au </p> <br />
        <p className="text-center pb-5 numerotel">04 67 65 53 30</p>
        <h2 className="d-flex justify-content-center pb-3">Plan d'accès</h2>
        <hr />
        <img src={`${window.location.origin}/images/map.png`} alt="map" className="img-thumbnail d-block mx-auto mt-3 mb-5" />
      </div>
    </>
  );

};

export default Contact;