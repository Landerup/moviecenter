import React from "react";

// Väljer vad jag vill hämta från film datan
const MovieCard = ({movie}) => {
    return (
        <>
            <div>
                {movie.title}
            </div>
        </>
    );
};

export default MovieCard;