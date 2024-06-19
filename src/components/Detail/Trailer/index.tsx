import { VideoData } from "../../../types";
import { cssTrailer } from "./styles";

export default function Trailer({ videoData }: { videoData?: VideoData[] }) {
  return (
    <div css={cssTrailer}>
      <h3>Official Trailer:</h3>
      {videoData?.slice(0, 3).map((item) => (
        <iframe
          key={item.id}
          src={`https://www.youtube.com/embed/${item.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
      ))}
    </div>
  );
}
