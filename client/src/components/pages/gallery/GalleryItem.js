import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../general/utils/Utils";
import Loader from "../../general/utils/Loading";

const GalleryItem = ({ gallery }) => {
    const [isLoading, setIsLoading] = useState(true);
    const galleryData = useSelector((state) => state.galleryReducer);

    useEffect(() => {
        !isEmpty(galleryData[0]) && setIsLoading(false);
    }, [galleryData]);

    return (
        <li className="card-container cardstyle mb-5 d-block mx-auto" key={gallery._id}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="card-right">
                        <div className="card-header">
                        <h3 className="d-flex justify-content-center textmargin">{gallery.title}</h3>
                        </div>
                        <p className="d-flex justify-content-center textmargin">{gallery.message}</p>
                        {gallery.picture && (
                            <img src={`${window.location.origin}/uploads/${gallery.picture}`} alt="card-pic" className="rounded mx-auto d-block card-pic" />
                        )}
                        {gallery.video && (
                            <iframe
                                src={gallery.video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="d-block mx-auto cardvid"
                                title={gallery._id}
                            ></iframe>
                        )}
                        <span className="d-flex justify-content-end pt-4 pb-1 pe-5 cardate">{dateParser(gallery.createdAt)}</span>
                    </div>
                </>
            )}
        </li>
    );
};

export default GalleryItem;