import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../general/utils/Utils";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    const gallery = useSelector((state) => state.galleryReducer);

    return (
        <>
            <div className="gallery">
            <img src={`${window.location.origin}/images/gallery.jpg`} alt="truck" className="img-fluid homepic" />
                <h1 className="galerie d-flex justify-content-center pt-5 pb-3">Galerie</h1>
            </div>
            <hr />
            <ul className="pt-4">
                {!isEmpty(gallery[0]) &&
                    gallery.map((gallery) => {
                        return <GalleryItem gallery={gallery} key={gallery._id} />;
                    })
                }
            </ul>
        </>

    );
};

export default Gallery;