import React, { useContext } from "react";

const TvInfo = ({ tv }) => {
  const genres = tv.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {tv.name}
        </h1>
        <div className="flex  flex-col gap-2 text-white">
          <h4>{tv.vote_average}/10</h4>
          <h4>
            {genres}
          </h4>
        </div>
      </div>
    </>
  );
};

export default TvInfo;