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
            content: string;
        };
        space: string[];
        borders: string[];
        fonts: {
            sans: string;
        };
        fontSizes: string[];
        fontWeights: {
            regular: number;
            semibold: number;
        };
        lineHeights: {
            default: number;
        };
        colors: {
            bg: {
                primary: string;
            };
            text: {
                primary: string;
            };
            border: {
                primary: string;
                secondary: string;
            };
        };
        mediaQueries: string[];
    }
}
