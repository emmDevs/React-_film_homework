import React from 'react';

const Film = ({url, children}) =>{
    return(

        <a href={url}>
            <h4>{children}</h4>
        </a>

    );
}

export default Film;