import { useQuery } from "@apollo/client";
import { ReactElement } from "react";
import { Link, Redirect } from "react-router-dom";
import { css } from "styled-components";
import AvatarComponent from "../../components/avatarComponent";
import BoxElement from "../../elements/boxElement";
import ImageElement from "../../elements/imageElement";
import LinkElement from "../../elements/linkElement";
import TextElement from "../../elements/textElement";
import { INDEX_ARTIST, IndexArtistData, IndexArtistVars } from "../../requests/artistRequest";

export default function IndexArtist(): ReactElement | null {
    const { error, loading, data } = useQuery<IndexArtistData, IndexArtistVars>(INDEX_ARTIST, {
        variables: { limit: 20, tattooLimit: 1 },
    });

    if (error) {
        return <Redirect to="/error" />;
    }

    if (loading) {
        return null;
    }

    if (!data?.artists.nodes.length) {
        return <Redirect to="/error" />;
    }

    return (
        <BoxElement $variant="page">
            <div
                css={css`
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: ${({ theme }) => theme.space[3]};

                    @media ${({ theme }) => theme.media.sm} {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    @media ${({ theme }) => theme.media.lg} {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    @media ${({ theme }) => theme.media.xl} {
                        grid-template-columns: repeat(4, 1fr);
                    }
                `}
            >
                {data.artists.nodes.map((artist) => (
                    <div
                        key={artist.id}
                        css={css`
                            border: ${({ theme }) => theme.borders[0]};
                            border-color: ${({ theme }) => theme.colors.border.primary};
                            border-radius: ${({ theme }) => theme.radii[2]};
                            overflow: hidden;
                        `}
                    >
                        <LinkElement as={Link} to={`/artist/detail/${artist.id}`} $variant="plain">
                            <div
                                css={css`
                                    position: relative;
                                    padding-top: 75%;
                                    background: ${({ theme }) => theme.colors.bg.secondary};
                                `}
                            >
                                {!!artist.tattoos.nodes.length && (
                                    <ImageElement
                                        loading="lazy"
                                        $variant="cover"
                                        $api={{ type: "image", image: artist.tattoos.nodes[0].image, width: 400 }}
                                        css={css`
                                            position: absolute;
                                            top: 0px;
                                        `}
                                    />
                                )}
                            </div>
                            <div
                                css={css`
                                    display: flex;
                                    align-items: center;
                                    padding: ${({ theme }) => theme.space[2]};
                                `}
                            >
                                <AvatarComponent
                                    size="medium"
                                    image={artist.account.image}
                                    name={artist.account.name}
                                />
                                <TextElement
                                    $variant="line"
                                    css={css`
                                        margin-left: ${({ theme }) => theme.space[1]};
                                        font-size: ${({ theme }) => theme.fontSizes[1]};
                                        font-weight: ${({ theme }) => theme.fontWeights.semibold};
                                    `}
                                >
                                    {artist.account.name}
                                </TextElement>
                            </div>
                        </LinkElement>
                    </div>
                ))}
            </div>
        </BoxElement>
    );
}
