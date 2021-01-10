import { DefaultTheme } from "styled-components";
import { commonPalette, darkPalette, lightPalette } from "./utils/colorUtil";

const commonStyle: Omit<DefaultTheme, "colors" | "mediaQueries"> = {
    breakpoints: ["544px", "768px", "1012px", "1280px"],
    zIndices: [100],
    sizes: {
        header: "64px",
        content: "1504px",
    },
    space: ["4px", "8px", "16px", "24px", "32px", "40px"],
    borders: ["1px solid"],
    fonts: {
        sans: "system-ui, sans-serif",
    },
    fontSizes: ["12px", "14px", "16px", "20px", "24px", "32px"],
    fontWeights: {
        regular: 400,
        semibold: 600,
    },
    lineHeights: {
        default: 1.5,
    },
};

const lightStyle: Pick<DefaultTheme, "colors"> = {
    colors: {
        bg: {
            primary: commonPalette.light,
        },
        text: {
            primary: lightPalette.gray[9],
        },
        border: {
            primary: lightPalette.gray[3],
            secondary: lightPalette.gray[2],
        },
    },
};

const darkStyle: Pick<DefaultTheme, "colors"> = {
    colors: {
        bg: {
            primary: commonPalette.dark,
        },
        text: {
            primary: darkPalette.gray[0],
        },
        border: {
            primary: darkPalette.gray[6],
            secondary: darkPalette.gray[7],
        },
    },
};

const mediaStyle: Pick<DefaultTheme, "mediaQueries"> = {
    mediaQueries: [
        `@media (min-width: ${commonStyle.breakpoints[0]})`,
        `@media (min-width: ${commonStyle.breakpoints[1]})`,
        `@media (min-width: ${commonStyle.breakpoints[2]})`,
        `@media (min-width: ${commonStyle.breakpoints[3]})`,
    ],
};

export default function defaultTheme(): DefaultTheme {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return { ...commonStyle, ...darkStyle, ...mediaStyle };
    }

    return { ...commonStyle, ...lightStyle, ...mediaStyle };
}
