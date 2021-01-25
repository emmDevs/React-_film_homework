import React from 'react';
import Film from './Film'
import './FilmList.css';

const FilmList = ({films}) =>{

    const filmsArray = films.map(film =>{
        return(
            <Film className="filmlist_films" url={film.url} key={film.id}>{film.name}</Film>
        )
    })

    return(
        <>
        {filmsArray}
        </>
    );
}

export default FilmList;