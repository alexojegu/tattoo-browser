import { FunctionComponent, StrictMode } from "react";
import { render } from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import AppContainer from "./appContainer";
import defaultTheme from "./defaultTheme";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        font-family: ${({ theme }) => theme.fonts.sans};
        font-size: ${({ theme }) => theme.fontSizes[2]};
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        line-height: ${({ theme }) => theme.lineHeights.default};
        background: ${({ theme }) => theme.colors.bg.primary};
        color: ${({ theme }) => theme.colors.text.primary}
    }

    svg {
        vertical-align: middle;
    }

    *, *::before, *::after {
	    box-sizing: border-box;
    }
`;

const AppRoot: FunctionComponent = () => {
    return (
        <StrictMode>
            <ThemeProvider theme={defaultTheme()}>
                <GlobalStyle />
                <AppContainer />
            </ThemeProvider>
        </StrictMode>
    );
};

function bootstrap(): void {
    render(<AppRoot />, document.getElementById("root"));
}

bootstrap();
