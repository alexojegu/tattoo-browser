import { ReactElement, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { css } from "styled-components";

const IndexPage = lazy(async () => import("../pages/indexPage"));
const IndexArtist = lazy(async () => import("../pages/artists/indexArtist"));
const ErrorPage = lazy(async () => import("../pages/errorPage"));

export default function MainLayout(): ReactElement {
    return (
        <main
            css={css`
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
            `}
        >
            <Suspense fallback={null}>
                <Switch>
                    <Route exact path="/">
                        <IndexPage />
                    </Route>
                    <Route exact path="/artist">
                        <IndexArtist />
                    </Route>
                    <Route path="/*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Suspense>
        </main>
    );
}
