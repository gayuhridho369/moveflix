import { LuStar } from "react-icons/lu";
import { POSTER_BASE_URL } from "../../../constants";
import {
  cssContentDetail,
  cssDetailText,
  cssPoster,
  cssRating,
} from "./styles";
import { MovieDetailResponse } from "../../../types";

export default function MovieInfo({
  category,
  movieInfo,
}: {
  category?: string;
  movieInfo?: MovieDetailResponse;
}) {
  return (
    <div css={cssContentDetail}>
      <div>
        <div css={cssPoster}>
          <img
            src={`${POSTER_BASE_URL}/${movieInfo?.poster_path}`}
            alt={movieInfo?.title}
          />

          <div css={cssRating}>
            <LuStar />
            {movieInfo?.vote_average?.toFixed(1)}
          </div>
        </div>

        <div css={cssDetailText}>
          <h1>{category === "movie" ? movieInfo?.title : movieInfo?.name}</h1>
          <p>{movieInfo?.overview}</p>

          <ul>
            <p>Genres:</p>
            {movieInfo?.genres.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
