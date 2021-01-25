import React from 'react';
import Film from './Film'

const FilmList = ({films}) =>{

    const filmsArray = films.map(film =>{
        return(
            <Film url={film.url} key={film.id}>{film.name}</Film>
        )
    })

    return(
        <>
        {filmsArray}
        </>
    );
}

export default FilmList;