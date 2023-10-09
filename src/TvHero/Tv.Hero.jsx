import React, { useContext } from "react";
import { TvContext } from "../context/Tv.context";
import TvInfo from "./Tv.info";

const TvHero = () => {
  const { tv } = useContext(TvContext);

  const genres = tv.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div>
        {/* mobile and tab sizes */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
            alt="cover poster"
            className="m-4 rounded"
            style={{ width: "calc(100% - 2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>{tv.vote_average}/10</h4>
              <h4>
                {tv.runtime} min | {genres}
              </h4>
            </div>
          </div>
          </div>
          </div>

        {/* Large Screen Device */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 14.95%, rgba(34, 34, 34) 30.3%, rgba(34, 34, 34, 0.90) 38.3%, rgba(34, 34, 34, 0.60) 58.3%, rgba(34, 34, 34, 0.04) 100%)",
            }}
          />

          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                alt="Movie Poster"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <TvInfo tv={tv} />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
            alt="backgrop poster"
            className="w-full h-full object-cover object-center"
          />
        </div>
    </>
  );
};

export default TvHero;