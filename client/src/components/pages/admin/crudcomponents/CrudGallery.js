import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../../../store/actions/gallery.actions";
import GalleryCard from "./CardAdminGallery";
import { isEmpty } from "../../../general/utils/Utils";
import NewGalleryForm from "../logique/NewGalleryForm";
import { NavLink } from "react-router-dom";

const CrudGallery = () => {
  const [loadGallery, setLoadGallery] = useState(true);
  const [count, setCount] = useState(5);
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
      setCount(count + 5);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadGallery, dispatch, count]);

  return (
    <div className="thread-container adminpage">
      <NavLink to="/admin" className='nav-link text-end'> Retour accueil admin </NavLink>
      <NewGalleryForm />
      <ul>
        {!isEmpty(gallery[0]) &&
          gallery.map((gallery) => {
            return <GalleryCard gallery={gallery} key={gallery._id} />;
          })}
      </ul>
    </div>
  );
};

export default CrudGallery;