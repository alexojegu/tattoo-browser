import { useQuery } from "@apollo/client";
import { ReactElement } from "react";
import { Link, Redirect } from "react-router-dom";
import { css } from "styled-components";
import MasonryComponent from "../../components/masonryComponent";
import BoxElement from "../../elements/boxElement";
import ImageElement from "../../elements/imageElement";
import LinkElement from "../../elements/linkElement";
import { INDEX_TATTOO, IndexTattooData, IndexTattooVars } from "../../requests/tattooRequest";

export default function IndexTattoo(): ReactElement | null {
    const { loading, error, data } = useQuery<IndexTattooData, IndexTattooVars>(INDEX_TATTOO, {
        variables: { limit: 20 },
    });

    if (loading) {
        return null;
    }

    if (error) {
        return <Redirect to="/error" />;
    }

    if (!data?.tattoos.nodes.length) {
        return <Redirect to="/error" />;
    }

    return (
        <BoxElement $variant="page">
            <MasonryComponent columns={{ sm: 2, lg: 3, xl: 4 }}>
                {data.tattoos.nodes.map((tattoo) => (
                    <div key={tattoo.id}>
                        <LinkElement as={Link} to={`/tattoo/detail/${tattoo.id}`} $variant="plain">
                            <div
                                css={css`
                                    position: relative;
                                    padding-top: calc(${tattoo.height / tattoo.width} * 100%);
                                    background: ${({ theme }) => theme.colors.bg.secondary};
                                `}
                            >
                                <ImageElement
                                    loading="lazy"
                                    $variant="contain"
                                    $api={{ type: "image", image: tattoo.image, width: 400 }}
                                    css={css`
                                        position: absolute;
                                        top: 0px;
                                    `}
                                />
                            </div>
                        </LinkElement>
                    </div>
                ))}
            </MasonryComponent>
        </BoxElement>
    );
}
