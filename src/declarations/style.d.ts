import { CSSProp, DefaultTheme } from "styled-components";

declare module "react" {
    interface Attributes {
        css?: CSSProp<DefaultTheme>;
    }
}

declare module "styled-components" {
    export interface DefaultTheme {
        breakpoints: string[];
        zIndices: number[];
        sizes: {
            header: string;
            menu: string;
            content: string;
        };
        space: string[];
        borders: string[];
        radii: string[];
        fonts: {
            sans: string;
        };
        fontSizes: string[];
        fontWeights: {
            regular: number;
            medium: number;
            semibold: number;
        };
        lineHeights: {
            default: number;
        };
        colors: {
            bg: {
                primary: string;
                secondary: string;
                placeholder: string;
            };
            text: {
                primary: string;
                secondary: string;
                placeholder: string;
            };
            border: {
                primary: string;
                secondary: string;
            };
        };
        media: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
