import { useQuery } from "@apollo/client";
import { ReactElement } from "react";
import { Redirect, useParams } from "react-router-dom";
import { css } from "styled-components";
import BoxElement from "../../elements/boxElement";
import ImageElement from "../../elements/imageElement";
import { DETAIL_TATTOO, DetailTattooData, DetailTattooVars } from "../../requests/tattooRequest";

export default function DetailTattoo(): ReactElement | null {
    const { id } = useParams<DetailTattooParams>();
    const { error, loading, data } = useQuery<DetailTattooData, DetailTattooVars>(DETAIL_TATTOO, {
        variables: { id },
    });

    if (error) {
        return <Redirect to="/error" />;
    }

    if (loading) {
        return null;
    }

    if (!data?.tattoo) {
        return <Redirect to="/error" />;
    }

    return (
        <BoxElement $variant="page">
            <div
                css={css`
                    max-width: calc(${data.tattoo.width / data.tattoo.height} * 75vh);
                    width: 100%;
                    margin-right: auto;
                    margin-left: auto;
                `}
            >
                <div
                    css={css`
                        position: relative;
                        padding-top: calc(${data.tattoo.height / data.tattoo.width} * 100%);
                        background: ${({ theme }) => theme.colors.bg.secondary};
                    `}
                >
                    <ImageElement
                        loading="lazy"
                        $variant="contain"
                        $api={{ path: data.tattoo.image, width: 800 }}
                        css={css`
                            position: absolute;
                            top: 0px;
                        `}
                    />
                </div>
            </div>
        </BoxElement>
    );
}

export interface DetailTattooParams {
    id: string;
}
