import { css } from "@emotion/react";
import { LIGHT_GRAY_COLOR, breakpoints } from "../../../styles";

export const cssTrailer = css({
  marginTop: "-350px",
  [breakpoints.mobile]: {
    marginTop: "-300px",
  },
  h3: {
    marginBottom: 12,
    fontSize: 24,
    color: LIGHT_GRAY_COLOR,
    [breakpoints.mobile]: {
      fontSize: 14,
    },
  },
  iframe: {
    width: "100%",
    height: 500,
    [breakpoints.mobile]: {
      height: 250,
    },
  },
});
