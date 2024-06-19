import { css } from "@emotion/react";
import { breakpoints } from "../../styles";

export const cssCover = (coverImg: string) =>
  css({
    position: "relative",
    width: "100%",
    height: "52vh",
    maxHeight: 500,
    maxWidth: 1600,
    margin: "auto",
    backgroundImage: coverImg,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    [breakpoints.mobile]: {
      height: "75vh",
    },
  });

export const cssLoader = css({
  marginTop: 162,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
