import React from "react";
import { useDispatch } from "react-redux";
import { deleteNews } from "../../../../store/actions/news.actions";

const DeleteNewsCard = (props) => {
    const dispatch = useDispatch();

    const deleteQuote = () => dispatch(deleteNews(props.id));

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

export default DeleteNewsCard;