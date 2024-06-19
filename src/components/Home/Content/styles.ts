import { css } from "@emotion/react";
import { PRIMARY_COLOR, WHITE_COLOR, breakpoints } from "../../../styles";

export const cssContent = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 24,
  marginTop: 24,
  [breakpoints.mobile]: {
    gap: 12,
  },
});

export const cssLoader = css({
  marginTop: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const cssLoadMore = css({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  button: {
    cursor: "pointer",
    width: "max-content",
    padding: "10px 20px",
    marginBottom: 64,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 8,
    border: 0,
    outline: 0,
    color: WHITE_COLOR,
    fontWeight: 600,
  },
});
