import React from "react";

const loader = () => {
    return(
        <div style={ {minHeight: '100vh'} } className="d-flex flex-row justify-content-center align-items-center w-100">
            <img src="../../../public/images/loading.gif" alt="loading" />
        </div>
    );
} 

export default loader;