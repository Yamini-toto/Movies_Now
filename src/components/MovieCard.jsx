import React from "react";

const MovieCard = ({
  poster_path,
  id,
  name,
  addToWatchlist,
  movieObj,
  removeFromWatchlist,
  watchlist,
}) => {
  function doesContain(movieObj) {
    return watchlist.some((movie) => movie.id === movieObj.id);
  }

  return (
    <div
      key={id}
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          className="absolute flex items-center justify-center right-0 m-1 bg-gray-900/60 rounded-lg h-8 w-8"
          onClick={() => removeFromWatchlist(movieObj)}
        >
          &#10060;
        </div>
      ) : (
        <div
          className="absolute flex items-center justify-center right-0 m-1 bg-gray-900/60 rounded-lg h-8 w-8"
          onClick={() => addToWatchlist(movieObj)}
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 absolute bottom-0">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
