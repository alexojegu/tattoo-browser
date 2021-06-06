import { ReactElement, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { css } from "styled-components";
import FooterLayout from "./layouts/footerLayout";
import HeaderLayout from "./layouts/headerLayout";
import MainLayout from "./layouts/mainLayout";
import MenuLayout from "./layouts/menuLayout";

export default function AppContainer(): ReactElement {
    const [menu, setMenu] = useState(false);

    return (
        <BrowserRouter>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                `}
            >
                <HeaderLayout setMenu={setMenu} />
                {menu && <MenuLayout setMenu={setMenu} />}
                <MainLayout />
                <FooterLayout />
            </div>
        </BrowserRouter>
    );
}
