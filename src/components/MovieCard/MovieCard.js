import { motion } from "framer-motion";

import "./MovieCard.css";
export const MovieCard = ({ movie }) => {
  return (
    <motion.div layout>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.original_title}
      />
      <h4>{movie.original_title}</h4>
    </motion.div>
  );
};
