import { css } from "@emotion/react";
import { PRIMARY_COLOR, WHITE_COLOR, breakpoints } from "../../../styles";

export const cssFiltering = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [breakpoints.mobile]: {
    flexDirection: "column",
  },
  ".status": {
    listStyle: "none",
    display: "flex",
    gap: 8,
    width: "100%",
    overflow: "auto",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    li: {
      cursor: "pointer",
      textWrap: "nowrap",
      borderRadius: 8,
      fontWeight: 600,
      borderLeft: `1px solid ${PRIMARY_COLOR}`,
      padding: "12px 20px",
      fontSize: 14,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      [breakpoints.mobile]: {
        padding: "8px 12px",
        fontSize: 12,
      },
      '&[data-active="true"]': {
        color: PRIMARY_COLOR,
        border: `1px solid ${PRIMARY_COLOR}`,
      },
    },
  },
  ".genres": {
    position: "relative",
    [breakpoints.mobile]: {
      position: "absolute",
      top: "-65px",
      right: 0,
      zIndex: 5,
    },
    svg: {
      fontSize: 14,
      position: "absolute",
      top: "50%",
      right: "12px",
      transform: "translateY(-50%)",
      [breakpoints.mobile]: {
        fontSize: 12,
      },
    },
    select: {
      height: "max-content",
      padding: "12px 48px 12px 16px",
      fontWeight: 600,
      fontSize: 14,
      outline: "none",
      border: "none",
      width: 175,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: 8,
      borderLeft: `1px solid ${PRIMARY_COLOR}`,
      color: WHITE_COLOR,
      cursor: "pointer",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      appearance: "none",
      '&[data-active="true"]': {
        color: PRIMARY_COLOR,
        border: `1px solid ${PRIMARY_COLOR}`,
      },
      [breakpoints.mobile]: {
        fontSize: 12,
        padding: "8px 26px 8px 10px",
        width: 125,
      },
    },
  },
});
