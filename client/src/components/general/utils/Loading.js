import React from "react";
import loader from "generalPicture/loading.gif";

const Loader = () => {
    return(
        <div style={ {minHeight: '100vh'} } className="d-flex flex-row justify-content-center align-items-center w-100">
            <img src={loader} alt="loading" />
        </div>
    );
} 

export default Loader;