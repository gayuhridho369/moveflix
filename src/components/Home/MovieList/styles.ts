import { css } from "@emotion/react";
import { GRAY_COLOR, PRIMARY_COLOR, breakpoints } from "../../../styles";

export const cssMovieList = css({
  display: "grid",
  gap: 18,
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  [breakpoints.tablet]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  [breakpoints.mobile]: {
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  ".movie-item": {
    position: "relative",
    height: 300,
    borderRadius: 8,
    backgroundColor: GRAY_COLOR,
    [breakpoints.mobile]: {
      height: 250,
    },
    "&:hover": {
      border: `1px solid ${PRIMARY_COLOR}`,
    },
    img: {
      objectFit: "cover",
      borderRadius: 8,
      width: "100%",
      height: "100%",
    },
    ".movie-title": {
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 50,
      backgroundColor: "rgba(0,0,0,0.75)",
      padding: 8,
      borderRadius: 0,
      width: "100%",
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      [breakpoints.mobile]: {
        height: 46,
      },
      h3: {
        height: 36,
        fontSize: 14,
        fontWeight: 800,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        [breakpoints.mobile]: {
          height: 30,
          fontSize: 12,
        },
      },
    },
  },
});

export const cssRating = css({
  position: "absolute",
  top: "5px",
  right: "5px",
  fontSize: 12,
  padding: "2px 6px",
  fontWeight: "bold",
  backgroundColor: PRIMARY_COLOR,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  gap: 2,
});
