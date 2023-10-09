import React, { useContext } from "react";

const MovieInfo = ({ movie }) => {
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex  flex-col gap-2 text-white">
          <h4>4k rating</h4>
          <h4>English, Hindi, Kannada, Tamil, Telgu</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;