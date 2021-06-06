import { DefaultTheme } from "styled-components";
import { commonPalette, darkPalette, lightPalette } from "./utils/colorUtil";

const commonStyle: Omit<DefaultTheme, "colors" | "media"> = {
    breakpoints: ["544px", "768px", "1012px", "1280px"],
    zIndices: [100, 200],
    sizes: {
        header: "64px",
        menu: "288px",
        content: "1504px",
    },
    space: ["4px", "8px", "16px", "24px", "32px", "40px"],
    borders: ["1px solid"],
    radii: ["3px", "6px", "9px"],
    fonts: {
        sans: "system-ui, sans-serif",
    },
    fontSizes: ["12px", "14px", "16px", "20px", "24px", "32px"],
    fontWeights: {
        regular: 400,
        medium: 500,
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
            secondary: lightPalette.gray[0],
            placeholder: lightPalette.gray[2],
        },
        text: {
            primary: lightPalette.gray[9],
            secondary: lightPalette.gray[6],
            placeholder: lightPalette.gray[4],
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
            secondary: darkPalette.gray[9],
            placeholder: darkPalette.gray[7],
        },
        text: {
            primary: darkPalette.gray[0],
            secondary: darkPalette.gray[3],
            placeholder: darkPalette.gray[5],
        },
        border: {
            primary: darkPalette.gray[6],
            secondary: darkPalette.gray[7],
        },
    },
};

const queryStyle: Pick<DefaultTheme, "media"> = {
    media: {
        sm: `(min-width: ${commonStyle.breakpoints[0]})`,
        md: `(min-width: ${commonStyle.breakpoints[1]})`,
        lg: `(min-width: ${commonStyle.breakpoints[2]})`,
        xl: `(min-width: ${commonStyle.breakpoints[3]})`,
    },
};

export default function defaultTheme(): DefaultTheme {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return { ...commonStyle, ...darkStyle, ...queryStyle };
    }

    return { ...commonStyle, ...lightStyle, ...queryStyle };
}
