import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { css } from "styled-components";
import FooterLayout from "./layouts/footerLayout";
import HeaderLayout from "./layouts/headerLayout";
import MainLayout from "./layouts/mainLayout";

export default function AppContainer(): ReactElement {
    return (
        <BrowserRouter>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                `}
            >
                <HeaderLayout />
                <MainLayout />
                <FooterLayout />
            </div>
        </BrowserRouter>
    );
}
