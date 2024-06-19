import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import api from "../../axios";
import {
  Category,
  Status,
  ErrorResponse,
  GenreResponse,
  MovieResponse,
  Movie,
} from "../../types";
import { cssMain } from "../../styles";
import Navbar from "../Navbar";
import Header from "./Header";
import Content from "./Content";

export default function Home() {
  const [category, setCategory] = useState<Category>("movie");
  const [keyword, setKeyword] = useState<string>("");
  const [status, setStatus] = useState<Status>("now_playing");
  const [genre, setGenre] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const [movieData, setMovieData] = useState<Movie[]>([]);

  const { category: categoryPath } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    setCategory((categoryPath as Category) || "movie");

    if (categoryPath === "movie") setStatus("now_playing");
    if (categoryPath === "tv") setStatus("airing_today");

    setKeyword("");
    setGenre(0);
    setPage(1);
  }, [categoryPath]);

  const handleChangeKeyword = (value: string) => {
    if (keyword === value) return;

    setKeyword(value);
    setStatus("");
    setGenre(0);
    setPage(1);
  };

  const handleChangeStatus = (value: Status) => {
    if (value === status) return;

    setStatus(value);
    setKeyword("");
    setGenre(0);
    setPage(1);
  };

  const handleChangeGenre = (value: number) => {
    if (value === genre) return;

    setGenre(value);
    setKeyword("");
    setStatus("");
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeMovieData = (movies: Movie[]) => {
    if (page > 1) {
      setMovieData((prev) => [...prev, ...movies]);
    } else {
      setMovieData(movies);
    }
  };

  const { data: genreData } = useQuery<GenreResponse, ErrorResponse>({
    queryKey: ["genre", [category]],
    queryFn: () => api.get(`/genre/${category}/list`),
  });

  const { isLoading: searchLoading } = useQuery<MovieResponse, ErrorResponse>({
    queryKey: ["search", [page, keyword]],
    enabled: Boolean(keyword),
    queryFn: () =>
      api.get(`/search/${category}`, {
        params: {
          page: page,
          query: keyword,
        },
      }),
    onSuccess: (data) => handleChangeMovieData(data.results),
  });

  const { isLoading: discoverLoading } = useQuery<MovieResponse, Error>({
    queryKey: ["discover", [page, genre]],
    enabled: genre > 0,
    queryFn: () =>
      api.get(`/discover/${category}`, {
        params: {
          page: page,
          with_genres: genre,
        },
      }),
    onSuccess: (data) => handleChangeMovieData(data.results),
  });

  const { isLoading: movieLoading } = useQuery<MovieResponse, ErrorResponse>({
    queryKey: ["movie", [page, status]],
    enabled: category === "movie" && !keyword && genre < 1,
    queryFn: () =>
      api.get(`/movie/${status}`, {
        params: {
          page: page,
        },
      }),
    onSuccess: (data) => handleChangeMovieData(data.results),
  });

  const { isLoading: tvLoading } = useQuery<MovieResponse, ErrorResponse>({
    queryKey: ["tv", [page, status]],
    enabled: category === "tv" && !keyword && genre < 1,
    queryFn: () =>
      api.get(`/tv/${status}`, {
        params: {
          page: page,
        },
      }),
    onSuccess: (data) => handleChangeMovieData(data.results),
  });

  const loading = searchLoading || discoverLoading || movieLoading || tvLoading;

  return (
    <>
      <Navbar />

      <main css={cssMain}>
        <Header
          keyword={keyword}
          category={category}
          onChangeKeyword={handleChangeKeyword}
        />

        <section>
          <Content
            isLoading={loading}
            isBegining={page === 1}
            category={category}
            status={status}
            genre={genre}
            movieData={movieData}
            genres={genreData?.genres}
            onChangeStatus={handleChangeStatus}
            onChangeGenre={handleChangeGenre}
            onNextPage={handleNextPage}
          />
        </section>
      </main>
    </>
  );
}
