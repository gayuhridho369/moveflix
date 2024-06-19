import { css } from "@emotion/react";
import { PRIMARY_COLOR, WHITE_COLOR, breakpoints } from "../../../styles";
import Background from "../../../assets/background.jpeg";

export const cssHeader = css({
  position: "relative",
  width: "100%",
  height: "52vh",
  maxHeight: 500,
  maxWidth: 1600,
  margin: "auto",
  backgroundImage: `url(${Background})`,
});

export const cssDarkBackground = css({
  position: "absolute",
  zIndex: 2,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
});

export const cssTitleSearch = css({
  position: "absolute",
  zIndex: 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "90vw",
  gap: 18,
  [breakpoints.mobile]: {
    transform: "translate(-50%, -20%)",
  },
  ".title": {
    fontSize: 42,
    [breakpoints.mobile]: {
      fontSize: 24,
    },
  },
  ".search": {
    display: "flex",
    flexWrap: "nowrap",
    input: {
      width: 400,
      outline: "none",
      fontSize: 18,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      padding: "12px 18px",
      backgroundColor: "rgba(0, 0, 0, 0.89)",
      color: WHITE_COLOR,
      border: "none",
      '&[data-active="true"]': {
        border: `1px solid ${PRIMARY_COLOR}`,
      },
      [breakpoints.mobile]: {
        width: 250,
        fontSize: 14,
      },
    },
    button: {
      padding: "12px 12px",
      outline: "none",
      fontSize: 18,
      backgroundColor: PRIMARY_COLOR,
      border: `1px solid ${PRIMARY_COLOR}`,
      color: WHITE_COLOR,
      fontWeight: 600,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      [breakpoints.mobile]: {
        fontSize: 14,
      },
    },
  },
});
