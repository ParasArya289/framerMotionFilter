import { useEffect } from "react";
import "./Filter.css";
export const Filter = ({
  activeGenre,
  setActiveGenre,
  setFiltered,
  movies
}) => {
  useEffect(() => {
    if (activeGenre !== 0) {
      const filteredList = movies.filter(({ genre_ids }) =>
        genre_ids.includes(activeGenre)
      );
      setFiltered(filteredList);
      return;
    }
    setFiltered(movies);
  }, [movies, activeGenre]);

  return (
    <>
      <button className="filterBtn" onClick={() => setActiveGenre(0)}>
        All
      </button>
      <button className="filterBtn" onClick={() => setActiveGenre(28)}>
        Action
      </button>
      <button className="filterBtn" onClick={() => setActiveGenre(35)}>
        Comedy
      </button>
    </>
  );
};
