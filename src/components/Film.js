import React from "react";

const Film = ({author, children}) => {

    return(
    <>
        <h4>{children}</h4>
        <p>{author}</p>
    </>
    )

}

export default Film;