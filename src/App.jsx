import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [watchlist, setWatchList] = useState([]);

  const addToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setWatchList(newWatchlist);
  };
  const removeFromWatchlist = (movieObj) => {
    let updatedWatchlist = watchlist.filter((movie) => movie.id != movieObj.id);
    localStorage.setItem("moviesApp", JSON.stringify(updatedWatchlist));
    setWatchList(updatedWatchlist);
  };

  useEffect(() => {
    let movies = JSON.parse(localStorage.getItem("moviesApp"));
    if (movies) {
      setWatchList(movies);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  addToWatchlist={addToWatchlist}
                  removeFromWatchlist={removeFromWatchlist}
                  watchlist={watchlist}
                />{" "}
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchList}
                removeFromWatchlist={removeFromWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
