import React,{useState} from 'react';

const UpcomingReleases = () => {

    const [upcomingFilms, setUpcomingFilms] = useState(
        [
           {upcomingFilms: "https://www.imdb.com/calendar/?region=gb"}
        ]
    )

    return(

        <a href={upcomingFilms}>
            <h4>
                View more upcoming releases >>
            </h4>
        </a>

    );
}

export default UpcomingReleases