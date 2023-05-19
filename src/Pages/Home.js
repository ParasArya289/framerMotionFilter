import { motion } from "framer-motion";

import "./Home.css";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Filter } from "../components/Filter/Fitler";
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const fetchPopularMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDU4Mzk1MTg5MzgzOTI3MzA3M2RjOTgzOGYyN2IxMCIsInN1YiI6IjYxZmI1YzMyMGM0YzE2MDA5YmE5ZDMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.onPEqn56m0SgW_qGB-jMuVUNhMJGBsqzkp7fJf-w8gk"
      }
    };
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const { results } = await res.json();
    setMovies(results);
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  console.log(movies);
  return (
    <>
      <Filter
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setFiltered={setFiltered}
        movies={movies}
      />
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 1 }
        }}
        className="popular"
      >
        {filtered.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </motion.div>
    </>
  );
};
