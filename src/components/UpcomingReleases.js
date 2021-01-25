import React,{useState} from 'react';
import './UpcomingRelease.css';

const UpcomingReleases = () => {

    const [upcomingFilms, setUpcomingFilms] = useState(
        [
           {upcomingFilms: "https://www.imdb.com/calendar/?region=gb"}
        ]
    )

    return(
        <div className="upcoming-releases_container">
        <a className="upcoming-releases_link" href={upcomingFilms}>
            <h4>
                View more upcoming releases >>
            </h4>
        </a>
        </div>

    );
}

export default UpcomingReleases