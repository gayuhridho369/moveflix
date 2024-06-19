import { useNavigate } from "react-router-dom";
import { POSTER_BASE_URL } from "../../../constants";
import { Category, Movie } from "../../../types";
import { cssMovieList, cssRating } from "./styles";
import { LuStar } from "react-icons/lu";

export default function MovieList({
  category,
  movieData,
}: {
  category: Category;
  movieData?: Movie[];
}) {
  const navigate = useNavigate();

  return (
    <div css={cssMovieList}>
      {movieData?.map((movie) => {
        return (
          <div
            key={movie.id + movie.poster_path}
            className="movie-item"
            onClick={() => navigate(`/${category}/${movie.id}`)}
          >
            <img
              alt={movie.title}
              src={`${POSTER_BASE_URL}/${movie.poster_path}`}
            />

            <div css={cssRating}>
              <LuStar />
              {movie.vote_average?.toFixed(1)}
            </div>

            <div className="movie-title">
              <h3>{category === "movie" ? movie.title : movie.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
