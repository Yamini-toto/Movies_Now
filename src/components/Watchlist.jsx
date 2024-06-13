import React, { useEffect, useState } from "react";
import genreIds from "./Utility/genre";

const Watchlist = ({ watchlist, setWatchlist, removeFromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genre, setgenre] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState(["All Genres"]);

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortInc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortInc]);
  };

  let sortDecreasing = () => {
    let sortDec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortDec]);
  };

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return genreIds[movie.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenre(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genre.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4"
                  : "bg-gray-200 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          placeholder="Search Movies"
        />
      </div>
      <div
        id="table"
        className="border border-gray-200 m-8 overflow-hidden rounded-lg"
      >
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2">
                  <i class="uil uil-arrow-up" onClick={sortIncreasing}></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2">
                  <i class="uil uil-arrow-down" onClick={sortDecreasing}></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currentGenre === "All Genres") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                let path = movieObj.poster_path;
                return (
                  <>
                    <tr key={movieObj.id} className="border-b-2">
                      <td className="flex items-center px-6 py-4">
                        <img
                          className="h-[6rem] w-[10rem]"
                          src={`https://image.tmdb.org/t/p/original${path}`}
                        />
                        <div className="mx-10">{movieObj.title}</div>
                      </td>

                      <td>{movieObj.vote_average}</td>
                      <td>{movieObj.popularity}</td>
                      <td>{genreIds[movieObj.genre_ids[0]]}</td>

                      <td
                        className="text-red-600"
                        onClick={() => removeFromWatchlist(movieObj)}
                      >
                        Delete
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
