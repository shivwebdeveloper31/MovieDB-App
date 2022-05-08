import React, { useState, useEffect } from 'react';
import Castlist from './Castlist';

const API_Cast = "https://api.themoviedb.org/3/movie/335787/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US";

function Cast() {

    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch(API_Cast)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setCast(data.cast);
            })
    }, [])

    return (
        <>
        <div>
            <h4>Cast</h4>
            {cast.length > 0 ? (
                    <div className="container">
                        <div className="grid">
                            {cast.map((movieReq) =>
                                <Castlist key={movieReq.id} {...movieReq} />)}
                        </div>
                    </div>
                ) : (
                    <h2>Sorry !! No Movies Found</h2>
                )}
        </div>
        </>
    )
}

export default Cast;