import React from "react";
import { useDispatch } from "react-redux";
import { deleteGallery } from "../../../../store/actions/gallery.actions";

const DeleteGalleryCard = (props) => {
    const dispatch = useDispatch();

    const deleteQuote = () => dispatch(deleteGallery(props.id));

    return (
        <button
            className="btn btn-danger"
            onClick={() => {
                if (window.confirm("Voulez-vous supprimer cet article ?")) {
                    deleteQuote();
                }
            }}
        >
            Supprimer
        </button>
    );
};

export default DeleteGalleryCard;