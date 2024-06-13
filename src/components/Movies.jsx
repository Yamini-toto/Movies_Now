import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Navigating from "./Navigating";

const Movies = ({ addToWatchlist, removeFromWatchlist, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const nextPage = () => {
    setPageNum(pageNum + 1);
  };

  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_MY_API}&page=${pageNum}`).then((res) => {
      setMovies(res.data.results);
    });
  }, [pageNum]);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className=" flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              id={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              addToWatchlist={addToWatchlist}
              movieObj={movieObj}
              removeFromWatchlist={removeFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Navigating next={nextPage} prev={prevPage} pageNum={pageNum} />
    </div>
  );
};

export default Movies;
