import React, {useState} from "react";

const FilmForm = ({onFilmSubmit}) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");


    const handleIdChange = (evt) => {
    setId(evt.target.value);
    }

    const handleNameChange = (evt) => {
    setName(evt.target.value);
    }

    const handleUrlChange = (evt) => {
        setName(evt.target.value);
    }

    const handleFilmSubmit = (evt) => {
    evt.preventDefault();
    const idToSubmit = id.trim();
    const nameToSubmit = name.trim();
    const urlToSubmit = url.trim();

    if (!idToSubmit || !nameToSubmit){
        return
    }

    onFilmSubmit({
        author: idToSubmit,
        name: nameToSubmit,
        url: urlToSubmit
    });

    setId("");
    setName("");
    setUrl("")
    }

    return (
    <form onSubmit={handleFilmSubmit}>
        <input 
        type="name"
        placeholder="The id Film"
        value={id}
        onChange={handleIdChange}
        />
        <input 
            type="name"
            placeholder="Title of the film"
            value={name}
            onChange={handleNameChange}
        />
        <input 
            type="name"
            placeholder="Url"
            value={name}
            onChange={handleUrlChange}
        />
        <input 
            type="submit"
            value="Post"
        />
    </form>
)

}

export default FilmForm;