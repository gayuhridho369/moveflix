import { FadeLoader } from "react-spinners";
import { Category, Genre, Movie, Status } from "../../../types";
import { PRIMARY_COLOR, cssContainer } from "../../../styles";
import Filtering from "../Filtering";
import MovieList from "../MovieList";
import { cssContent, cssLoadMore, cssLoader } from "./styles";

export default function Content({
  isLoading,
  isBegining,
  category,
  status,
  genre,
  movieData,
  genres,
  onChangeStatus,
  onChangeGenre,
  onNextPage,
}: {
  isLoading: boolean;
  isBegining: boolean;
  category: Category;
  status: Status;
  genre: number;
  movieData?: Movie[];
  genres?: Genre[];
  onChangeStatus: (type: Status) => void;
  onChangeGenre: (value: number) => void;
  onNextPage: () => void;
}) {
  return (
    <div css={cssContainer}>
      <div css={cssContent}>
        <Filtering
          status={status}
          category={category}
          genre={genre}
          genres={genres}
          onChangeStatus={onChangeStatus}
          onChangeGenre={onChangeGenre}
        />

        {isLoading && isBegining ? (
          <div css={cssLoader}>
            <FadeLoader color={PRIMARY_COLOR} />
          </div>
        ) : (
          <>
            <MovieList category={category} movieData={movieData} />

            <div css={cssLoadMore}>
              <button onClick={onNextPage}>
                Load more{isLoading && "..."}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
