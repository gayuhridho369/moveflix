import { css } from "@emotion/react";
import { LIGHT_GRAY_COLOR, PRIMARY_COLOR, breakpoints } from "../../../styles";

export const cssContentDetail = css({
  width: "100%",
  position: "relative",
  minHeight: "500px",
  top: "-300px",
  zIndex: 2,
  [breakpoints.mobile]: {
    top: "-335px",
  },
  "&>div": {
    position: "absolute",
    top: 0,
    left: 0,
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gap: 32,
    [breakpoints.mobile]: {
      gridTemplateColumns: "1fr",
      gap: 12,
    },
  },
});

export const cssPoster = css({
  position: "relative",
  width: "max-content",
  justifySelf: "center",
  img: {
    objectFit: "cover",
    width: "300px",
    height: "400px",
    borderRadius: 8,
    [breakpoints.mobile]: {
      width: "150px",
      height: "250px",
    },
  },
});

export const cssRating = css({
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: 14,
  padding: "2px 6px",
  fontWeight: "bold",
  backgroundColor: PRIMARY_COLOR,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  gap: 4,
  [breakpoints.mobile]: {
    fontSize: 10,
    top: "5px",
    right: "5px",
    padding: "2px 4px",
  },
});

export const cssDetailText = css({
  h1: {
    fontSize: 64,
    marginBottom: 24,
    textWrap: "wrap",
    [breakpoints.mobile]: {
      fontSize: 22,
      marginBottom: 8,
    },
  },
  p: {
    fontSize: 16,
    lineHeight: "24px",
    color: LIGHT_GRAY_COLOR,
    [breakpoints.mobile]: {
      fontSize: 12,
      lineHeight: "18px",
    },
  },
  ul: {
    marginTop: 32,
    display: "flex",
    gap: 8,
    listStyle: "none",
    padding: 0,
    flexWrap: "wrap",
    [breakpoints.mobile]: {
      marginTop: 12,
      gap: 4,
    },
    p: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: 14,
      [breakpoints.mobile]: {
        fontSize: 12,
      },
    },
    li: {
      padding: "8px 12px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: 8,
      fontSize: 14,
      [breakpoints.mobile]: {
        padding: "6px 10px",
        fontSize: 12,
      },
    },
  },
});
