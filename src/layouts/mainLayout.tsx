import { ReactElement, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { css } from "styled-components";

const IndexPage = lazy(async () => import("../pages/indexPage"));
const IndexTattoo = lazy(async () => import("../pages/tattoos/indexTattoo"));
const DetailTattoo = lazy(async () => import("../pages/tattoos/detailTattoo"));
const IndexArtist = lazy(async () => import("../pages/artists/indexArtist"));
const DetailArtist = lazy(async () => import("../pages/artists/detailArtist"));
const IndexStudio = lazy(async () => import("../pages/studios/indexStudio"));
const DetailStudio = lazy(async () => import("../pages/studios/detailStudio"));
const ErrorPage = lazy(async () => import("../pages/errorPage"));

export default function MainLayout(): ReactElement {
    return (
        <main
            css={css`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
            `}
        >
            <Suspense fallback={null}>
                <Switch>
                    <Route exact path="/">
                        <IndexPage />
                    </Route>
                    <Route exact path="/tattoo">
                        <IndexTattoo />
                    </Route>
                    <Route exact path="/tattoo/detail/:id">
                        <DetailTattoo />
                    </Route>
                    <Route exact path="/artist">
                        <IndexArtist />
                    </Route>
                    <Route exact path="/artist/detail/:id">
                        <DetailArtist />
                    </Route>
                    <Route exact path="/studio">
                        <IndexStudio />
                    </Route>
                    <Route exact path="/studio/detail/:id">
                        <DetailStudio />
                    </Route>
                    <Route path="/*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Suspense>
        </main>
    );
}
