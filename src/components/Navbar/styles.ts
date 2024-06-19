import { css } from "@emotion/react";
import { PRIMARY_COLOR, WHITE_COLOR, breakpoints } from "../../styles";

export const cssNavbarContainer = css({
  position: "fixed",
  width: "100%",
  zIndex: 10,
  backgroundColor: "transparent",
  transition: "all 0.3s ease-in-out",
  '&[data-active="true"]': {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export const cssNavbar = css({
  maxWidth: 1250,
  margin: "auto",
  padding: "0 32px",
  [breakpoints.tablet]: {
    padding: "0 16px",
  },
  [breakpoints.mobile]: {
    padding: "0 12px",
  },
  position: "relative",
  zIndex: 3,
  height: 75,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".navlist": {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 64,
    h1: {
      fontSize: 32,
      color: PRIMARY_COLOR,
      cursor: "pointer",
      [breakpoints.mobile]: {
        fontSize: 24,
        marginBottom: 24,
      },
    },
    ul: {
      display: "flex",
      listStyle: "none",
      gap: 32,
      fontSize: 18,
      [breakpoints.mobile]: {
        position: "absolute",
        top: 45,
        fontSize: 14,
      },
      li: {
        fontWeight: 600,
        color: WHITE_COLOR,
        cursor: "pointer",
        '&[data-active="true"]': {
          color: PRIMARY_COLOR,
        },
      },
    },
  },
  ".watchlist div": {
    cursor: "not-allowed",
    padding: "8px 24px",
    backgroundColor: PRIMARY_COLOR,
    outline: "none",
    border: "none",
    borderRadius: 8,
    fontWeight: 800,
    fontSize: 16,
    color: WHITE_COLOR,
    [breakpoints.mobile]: {
      fontSize: 14,
    },
  },
});
