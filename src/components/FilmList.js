import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films?.map(film => {
        return (
            <Film key={film.id} name={film.name} >{film.name}</Film>
        );
    });

    return(
    <>
        {filmNodes}
    </>
)

}

export default FilmList;