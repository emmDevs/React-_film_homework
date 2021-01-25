import React from 'react';
import './Film.css';


const Film = ({url, children}) =>{
    return(

        <a className="film_links" href={url}>
            <h4 className="film_text">{children}</h4>
        </a>

    );
}

export default Film;