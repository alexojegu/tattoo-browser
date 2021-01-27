import { useQuery } from "@apollo/client";
import { ReactElement } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { css } from "styled-components";
import AvatarComponent from "../../components/avatarComponent";
import MasonryComponent from "../../components/masonryComponent";
import SocialComponent from "../../components/socialComponent";
import BoxElement from "../../elements/boxElement";
import HeadingElement from "../../elements/headingElement";
import ImageElement from "../../elements/imageElement";
import LinkElement from "../../elements/linkElement";
import { DETAIL_ARTIST, DetailArtistData, DetailArtistVars } from "../../requests/artistRequest";

export default function DetailArtist(): ReactElement | null {
    const { id } = useParams<DetailArtistParams>();
    const { error, loading, data } = useQuery<DetailArtistData, DetailArtistVars>(DETAIL_ARTIST, {
        variables: { id, tattooLimit: 20 },
    });

    if (error) {
        return <Redirect to="/error" />;
    }

    if (loading) {
        return null;
    }

    if (!data?.artist) {
        return <Redirect to="/error" />;
    }

    return (
        <BoxElement $variant="page">
            <header
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: ${({ theme }) => theme.space[3]};

                    @media ${({ theme }) => theme.media.md} {
                        flex-direction: row;
                    }
                `}
            >
                <AvatarComponent size="large" image={data.artist.account.image} name={data.artist.account.name} />
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        @media ${({ theme }) => theme.media.md} {
                            align-items: stretch;
                            margin-left: ${({ theme }) => theme.space[3]};
                        }
                    `}
                >
                    <HeadingElement
                        $variant="h1"
                        css={css`
                            text-align: center;
                        `}
                    >
                        {data.artist.account.name}
                    </HeadingElement>
                    <SocialComponent
                        website={data.artist.website}
                        instagram={data.artist.instagram}
                        facebook={data.artist.facebook}
                    />
                </div>
            </header>
            {!!data.artist.tattoos.nodes.length && (
                <MasonryComponent columns={3}>
                    {data.artist.tattoos.nodes.map((tattoo) => (
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
                                        $api={{ path: tattoo.image, width: 400 }}
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
            )}
        </BoxElement>
    );
}

export interface DetailArtistParams {
    id: string;
}
