import React from "react";
import { Link } from "react-router-dom";

const Tv = (props) => {
  return (
    <Link to={`/tv/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="poster"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.name}
        </h3>
      </div>
    </Link>
  );
};
const PosterTv = (props) => {
  return <Tv {...props} />;
};

export default PosterTv;