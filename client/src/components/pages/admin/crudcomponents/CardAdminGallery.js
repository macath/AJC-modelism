import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../../../general/utils/Utils";
import { updateGallery } from "../../../../store/actions/gallery.actions";
import DeleteGalleryCard from "./DeleteGalleryCard";
import Loader from "../../../general/utils/Loading";

const GalleryCard = ({ gallery }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const galleryData = useSelector((state) => state.galleryReducer);
    const dispatch = useDispatch();

    const updateItem = () => {
        if (textUpdate) {
            dispatch(updateGallery(gallery._id, textUpdate));
        }
        setIsUpdated(false);
    };

    useEffect(() => {
        !isEmpty(galleryData[0]) && setIsLoading(false);
    }, [galleryData]);

    return (
        <li className="card-container admincard mb-5 d-block mx-auto" key={gallery._id}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="card-right">
                        <div className="card-header">
                            {isUpdated === false && <h3 className="d-flex justify-content-center">{gallery.title}</h3>}
                            {isUpdated && (
                                <div className="update-title">
                                    <textarea
                                        defaultValue={gallery.title}
                                        onChange={(e) => setTextUpdate(e.target.value)}
                                        className="d-block mx-auto"
                                    />
                                </div>
                            )}
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary me-2" onClick={() => setIsUpdated(!isUpdated)}>Edit</button>
                                <DeleteGalleryCard id={gallery._id} />
                            </div>
                        </div>
                        {isUpdated === false && <p className="d-flex justify-content-center textmargin">{gallery.message}</p>}
                        {isUpdated && (
                            <div className="update-post">
                                <textarea
                                    defaultValue={gallery.message}
                                    onChange={(e) => setTextUpdate(e.target.value)}
                                    className="d-block mx-auto mb-2 textcard"
                                />
                                <div className="button-container">
                                    <button className="btn btn-success d-block mx-auto mb-2" onClick={updateItem}>
                                        Valider modification
                                    </button>
                                </div>
                            </div>
                        )}
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
                        <div className="button-container">
                            
                            <span className="d-flex justify-content-end pt-4 pb-1 pe-5 cardate">{dateParser(gallery.createdAt)}</span>

                        </div>
                    </div>
                </>
            )}
        </li>
    );
};

export default GalleryCard;
