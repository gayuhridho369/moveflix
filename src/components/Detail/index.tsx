import { useEffect } from "react";
import { ErrorResponse, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { FadeLoader } from "react-spinners";
import { cssDarkBackground } from "../Home/Header/styles";
import api from "../../axios";
import { MovieDetailResponse, VideoResponse } from "../../types";
import { PRIMARY_COLOR, cssContainer, cssMain } from "../../styles";
import { COVER_BASE_URL } from "../../constants";
import Navbar from "../Navbar";
import MovieInfo from "./MovieInfo";
import Trailer from "./Trailer";
import { cssCover, cssLoader } from "./styles";

export default function Detail() {
  const { category, id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: detailData, isLoading: detailLoading } = useQuery<
    MovieDetailResponse,
    ErrorResponse
  >({
    queryKey: ["detail"],
    queryFn: () => api.get(`/${category}/${id}`),
  });

  const { data: videoData, isLoading: videosLoading } = useQuery<
    VideoResponse,
    ErrorResponse
  >({
    queryKey: ["videos"],
    queryFn: () => api.get(`/${category}/${id}/videos`),
  });

  const loading = detailLoading || videosLoading;

  return (
    <>
      <Navbar />

      <main css={cssMain}>
        {loading ? (
          <div css={cssLoader}>
            <FadeLoader color={PRIMARY_COLOR} />
          </div>
        ) : (
          <>
            <header
              css={cssCover(
                `url(${COVER_BASE_URL}/${detailData?.backdrop_path})`
              )}
            >
              <div css={cssDarkBackground}></div>
            </header>

            <section css={cssContainer}>
              <MovieInfo category={category} movieInfo={detailData} />
              <Trailer videoData={videoData?.results} />
            </section>
          </>
        )}
      </main>
    </>
  );
}
