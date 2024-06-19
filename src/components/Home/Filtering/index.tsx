import { FaAngleDown } from "react-icons/fa6";
import { Category, Genre, Status } from "../../../types";
import { cssFiltering } from "./styles";

export default function Filtering({
  status,
  category,
  genre,
  genres,
  onChangeStatus,
  onChangeGenre,
}: {
  status: Status;
  category: Category;
  genre: number;
  genres?: Genre[];
  onChangeStatus: (type: Status) => void;
  onChangeGenre: (value: number) => void;
}) {
  return (
    <div css={cssFiltering}>
      <ul className="status">
        {category === "movie" && (
          <>
            <li
              data-active={status === "now_playing"}
              onClick={() => onChangeStatus("now_playing")}
            >
              Now Playing
            </li>
            <li
              data-active={status === "upcoming"}
              onClick={() => onChangeStatus("upcoming")}
            >
              Upcoming
            </li>
          </>
        )}

        {category === "tv" && (
          <>
            <li
              data-active={status === "airing_today"}
              onClick={() => onChangeStatus("airing_today")}
            >
              Airing Today
            </li>
            <li
              data-active={status === "on_the_air"}
              onClick={() => onChangeStatus("on_the_air")}
            >
              On The Air
            </li>
          </>
        )}

        <li
          data-active={status === "popular"}
          onClick={() => onChangeStatus("popular")}
        >
          Popular
        </li>
        <li
          data-active={status === "top_rated"}
          onClick={() => onChangeStatus("top_rated")}
        >
          Top Rated
        </li>
      </ul>

      <div className="genres">
        <FaAngleDown />

        <select
          data-active={genre > 0}
          onChange={(event) => onChangeGenre(Number(event.target.value))}
        >
          <option value={""}>Select Genre</option>
          {genres?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
