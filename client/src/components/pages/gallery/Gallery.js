import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "../../general/utils/Utils";
import { getGallery } from "../../../store/actions/gallery.actions";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    const [loadGallery, setLoadGallery] = useState(true);
    const [count, setCount] = useState(3);
    const dispatch = useDispatch();
    const gallery = useSelector((state) => state.galleryReducer);

    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
            setLoadGallery(true);
        }
    }

    useEffect(() => {
        if (loadGallery) {
            dispatch(getGallery(count));
            setLoadGallery(false);
            setCount(count + 3);
        }

        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);
    }, [loadGallery, dispatch, count]);

    return (
        <>
            <div className="gallery">
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