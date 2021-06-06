import { useQuery } from "@apollo/client";
import { ReactElement } from "react";
import { Redirect, useParams } from "react-router-dom";
import { css } from "styled-components";
import AvatarComponent from "../../components/avatarComponent";
import SocialComponent from "../../components/socialComponent";
import BoxElement from "../../elements/boxElement";
import ButtonElement from "../../elements/buttonElement";
import HeadingElement from "../../elements/headingElement";
import ImageElement from "../../elements/imageElement";
import TextElement from "../../elements/textElement";
import LocationGraphic from "../../graphics/locationGraphic.svg";
import PhoneGraphic from "../../graphics/phoneGraphic.svg";
import { DETAIL_STUDIO, DetailStudioData, DetailStudioVars } from "../../requests/studioRequest";

export default function DetailArtist(): ReactElement | null {
    const { id } = useParams<DetailStudioParams>();
    const { loading, error, data } = useQuery<DetailStudioData, DetailStudioVars>(DETAIL_STUDIO, {
        variables: { id },
    });

    if (loading) {
        return null;
    }

    if (error) {
        return <Redirect to="/error" />;
    }

    if (!data?.studio) {
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
                <AvatarComponent square size="large" image={data.studio.image} name={data.studio.name} />
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
                        {data.studio.name}
                    </HeadingElement>
                    {(data.studio.website || data.studio.instagram || data.studio.facebook) && (
                        <SocialComponent
                            website={data.studio.website}
                            instagram={data.studio.instagram}
                            facebook={data.studio.facebook}
                        />
                    )}
                </div>
            </header>
            <section
                css={css`
                    display: flex;
                    flex-direction: column;
                    gap: ${({ theme }) => theme.space[3]};

                    @media ${({ theme }) => theme.media.lg} {
                        flex-direction: row;
                    }
                `}
            >
                <div
                    css={css`
                        @media ${({ theme }) => theme.media.lg} {
                            width: 50%;
                        }
                    `}
                >
                    <HeadingElement $variant="h2">Acerca del studio</HeadingElement>
                    <p
                        css={css`
                            white-space: pre-line;
                        `}
                    >
                        {data.studio.about}
                    </p>
                    <div
                        css={css`
                            display: flex;
                            justify-content: center;
                            margin-top: ${({ theme }) => theme.space[3]};
                        `}
                    >
                        <ButtonElement
                            as="a"
                            href={`tel:${data.studio.phone}`}
                            $variant="outline"
                            css={css`
                                display: inline-block;
                                text-decoration: none;
                            `}
                        >
                            <PhoneGraphic />
                            <span
                                css={css`
                                    margin-left: ${({ theme }) => theme.space[1]};
                                    vertical-align: middle;
                                `}
                            >
                                {data.studio.phone}
                            </span>
                        </ButtonElement>
                    </div>
                </div>
                <div
                    css={css`
                        @media ${({ theme }) => theme.media.lg} {
                            width: 50%;
                        }
                    `}
                >
                    <div
                        css={css`
                            border: ${({ theme }) => theme.borders[0]};
                            border-color: ${({ theme }) => theme.colors.border.primary};
                            border-radius: ${({ theme }) => theme.radii[2]};
                            overflow: hidden;
                        `}
                    >
                        <div
                            css={css`
                                position: relative;
                                padding-top: calc(${400 / 600} * 100%);
                                background: ${({ theme }) => theme.colors.bg.placeholder};
                            `}
                        >
                            <ImageElement
                                loading="lazy"
                                $variant="contain"
                                $api={{ kind: "map", location: data.studio.location, width: 600, height: 400 }}
                                css={css`
                                    position: absolute;
                                    top: 0px;
                                `}
                            />
                            <LocationGraphic
                                css={css`
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -100%);
                                `}
                            />
                        </div>
                        <div
                            css={css`
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: ${({ theme }) => theme.space[2]};
                            `}
                        >
                            <LocationGraphic />
                            <TextElement
                                $variant="line"
                                css={css`
                                    margin-left: ${({ theme }) => theme.space[1]};
                                    font-size: ${({ theme }) => theme.fontSizes[1]};
                                    font-weight: ${({ theme }) => theme.fontWeights.medium};
                                `}
                            >
                                {data.studio.address}
                            </TextElement>
                        </div>
                    </div>
                </div>
            </section>
        </BoxElement>
    );
}

export interface DetailStudioParams {
    id: string;
}
