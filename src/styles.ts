import { css } from "@emotion/react";

export const PRIMARY_COLOR = "#E50815";
export const WHITE_COLOR = "#F5F5F5";
export const GRAY_COLOR = "#808080";
export const LIGHT_GRAY_COLOR = "#C2C2C2";

export const breakpoints = {
  mobile: "@media (max-width: 600px)",
  tablet: "@media (max-width: 768px)",
  desktop: "@media (min-width: 1024px)",
};

export const cssMain = css({
  maxWidth: "100vw",
  overflow: "hidden",
});

export const cssContainer = css({
  maxWidth: 1250,
  margin: "auto",
  padding: "0 32px",
  [breakpoints.tablet]: {
    padding: "0 16px",
  },
  [breakpoints.mobile]: {
    padding: "0 12px",
  },
});
