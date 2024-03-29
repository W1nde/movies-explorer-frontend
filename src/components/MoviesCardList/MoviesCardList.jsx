import { useEffect, useState } from "react";
import MovieCard from "../MoviesCard/MoviesCard";
import MovieCardDummy from "../MoviesCardList/MovieCardDummy";
import { Route } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { updateWidth } from "../../utils/constants";

function MoviesCardList({
  movies,
  handleClickLike,
  request = false,
  notFound,
}) {
  const { _initCount, _count } = updateWidth(window.innerWidth);

  const [count, setCount] = useState(_count);
  const [initCount, seInitCount] = useState(_initCount);
  const [totalCount, setTotalCount] = useState(initCount);

  function handleClickMore() {
    setTotalCount(totalCount + count);
  }

  function updateAfterResize() {
    const update = updateWidth(window.innerWidth);
    setCount(update._count);
    seInitCount(update._initCount);
    return window.innerWidth;
  }
  //dummy addition
  function createDummy() {
    const dummyLength = [0, 1, 2, 3];
    const dummyOptput = dummyLength.map((x) => (
      <MovieCardDummy
        name={"123"}
        duration={"1h 23m"}
        image={
          "https://fs.kinomania.ru/file/film_poster/4/6e/46edd94e5293c53b27678c21a8e51233.jpeg"
        }
      />
    ));
    return dummyOptput;
  }

  useEffect(() => {
    updateAfterResize();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", updateAfterResize);
    }, 100);
    return () => window.removeEventListener("resize", updateAfterResize);
  }, []);

  return (
    <div className="cards">
      {request ? (
        <Preloader />
      ) : (
        <>
          <div
            className={
              movies.length == 0 && !notFound
                ? "card__list card__list-dummy"
                : "card__list"
            }
          >
            {movies.length == 0 && !notFound ? createDummy() : ""}
            {notFound && movies.length === 0 && "Ничего не найдено"}
            {movies.slice(0, totalCount).map((movie) => (
              <MovieCard
                key={movie.id || movie._id}
                movie={movie}
                handleClickLike={handleClickLike}
              />
            ))}
          </div>
          <Route path="/movies">
            {movies.length > totalCount && (
              <button className="cards__more-films" onClick={handleClickMore}>
                Ещё
              </button>
            )}
          </Route>
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
