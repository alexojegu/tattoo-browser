import { FunctionComponent, StrictMode } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
    }

    *, *::before, *::after {
	    box-sizing: border-box;
    }
`;

const AppRoot: FunctionComponent = () => {
    return (
        <StrictMode>
            <GlobalStyle />
            <div>Tattoo</div>
        </StrictMode>
    );
};

function bootstrap(): void {
    render(<AppRoot />, document.getElementById("root"));
}

bootstrap();
