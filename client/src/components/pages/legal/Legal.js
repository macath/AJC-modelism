import React from "react";
import { NavLink } from "react-router-dom";

const Legal = () => {

    return (
        <div className="legal container">
            <h1 className="d-flex justify-content-center pt-5 pb-3">Conditions générales</h1>
            <hr />

            <h4 className="pt-5 pb-3 text-center">Conception et réalisation</h4>
            <hr />
            <p className="text-center pt-3 mb-5">Ce site a été conçu et réalisé par <a href="http://www.linkedin.com/in/cathelain-macath">Emmanuel CATHELAIN</a> (github:"macath") pour AJC Modélisme</p>

            <h4 className="pt-5 pb-3 text-center">Droits d’auteur – Copyright</h4>
            <hr />
            <p className="text-center mb-5">L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle, aussi bien pour la forme (arborescence du site, organisation des pages,..) que pour le contenu (textes, images, photographies, iconographies,…) <br />
                Tous droits de reproduction sont réservés, y compris pour les documents photographiques. <br />
                La reproduction de tout ou partie de ce site sur un support électronique quel qu’il soit, ainsi que toute utilisation des visuels et textes qu’il contient autre que pour la consultation individuelle et privée est formellement interdite sauf autorisation expresse du responsable de la publication. <br />
                Toutes les reproductions, de tout ou partie de ce site, (documents téléchargeables, représentations iconographiques et photographiques) sont formellement interdites sauf autorisation expresse du responsable de la publication. L’atteinte à l’un de ses droits constitue un délit pénal de contrefaçon (article L 335-1 à 335-10 du Code de la propriété intellectuelle) et est passible d’une peine d’emprisonnement de deux ans et de 150 000 euros d’amende.</p>

            <h4 className="pt-5 pb-3 text-center">Mise à disposition des informations</h4>
            <hr />
            <p className="text-center pt-3 mb-5">Les informations publiées sont vérifiées de manière régulière, mais sont présentes à titre informatif et non contractuelle. Le responsable de la publication décline toute responsabilité en cas d’erreur ou d’omission. Pour signaler une erreur ou effectuer une demande de rectification, vous pouvez contacter le responsable de la publication (par courrier, courriel ou en utilisant le formulaire de contact). Les informations données sur ce site n’ont qu’une valeur informative et peuvent évoluer en fonction des modifications législatives ou réglementaires. Le responsable de la publication ne peut être tenu responsable de l’interprétation faite par l’internaute des informations présentées sur ce site. <br />
                Il appartient à l’internaute de protéger ses propres données et/ou logiciels de la contamination par d’éventuels virus circulant sur le réseau Internet. Le responsable de la publication ne peut être tenu pour responsable d’éventuels dommages survenus lors de la consultation de ce site internet.</p>

            <h4 className="pt-5 pb-3 text-center">Hebergeur du site internet</h4>
            <hr />
            <p className="text-center pt-3 mb-5">ON NE SAIT PAS QUI</p>

            <h4 className="pt-5 pb-3 text-center">Protection des données personnelles</h4>
            <hr />
            <p className="text-center pt3 mb-5">Conformément à la Loi Informatique et Libertés (Loi n° 78-17 du 6 janvier 1978), vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données directement ou indirectement nominatives que vous pourriez déposer sur ce site auprès du responsable de la publication, par courrier, courriel ou en utilisant le formulaire de contact.</p>

            <h4 className="pt-5 pb-3 text-center">Liens hypertexte</h4>
            <hr />
            <p className="text-center pt-3 mb-5">Le Site peut contenir des liens hypertexte donnant accès à d’autres sites web édités et gérés par des tiers et non par l’Editeur. L’Editeur ne pourra être tenu responsable directement ou indirectement dans le cas où lesdits sites tiers ne respecteraient pas les dispositions légales.
                La création de liens hypertexte vers le Site ne peut être faite qu’avec l’autorisation écrite et préalable de l’Editeur.</p>
            <li className="nav-item">
                <NavLink to="/admin" className='nav-link text-center adminspace pb-5'> Espace administrateur </NavLink>
            </li>
        </div>
    );
};

export default Legal;