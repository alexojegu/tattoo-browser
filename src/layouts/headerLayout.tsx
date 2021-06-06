import { Dispatch, ReactElement, SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";
import { css } from "styled-components";
import ButtonElement from "../elements/buttonElement";
import LinkElement from "../elements/linkElement";
import ListElement from "../elements/listElement";
import IconGraphic from "../graphics/iconGraphic.svg";
import LogoGraphic from "../graphics/logoGraphic.svg";
import MenuGraphic from "../graphics/menuGraphic.svg";

export default function HeaderLayout(props: HeaderLayoutProps): ReactElement {
    return (
        <header
            css={css`
                z-index: ${({ theme }) => theme.zIndices[0]};
                position: sticky;
                top: 0px;
                display: flex;
                justify-content: space-between;
                height: ${({ theme }) => theme.sizes.header};
                padding-right: ${({ theme }) => theme.space[2]};
                padding-left: ${({ theme }) => theme.space[2]};
                background: ${({ theme }) => theme.colors.bg.primary};

                @media ${({ theme }) => theme.media.md} {
                    padding-right: ${({ theme }) => theme.space[4]};
                    padding-left: ${({ theme }) => theme.space[4]};
                }
            `}
        >
            <div
                css={css`
                    display: flex;
                    align-items: center;
                `}
            >
                <LinkElement as={Link} to="/" $variant="plain">
                    <IconGraphic
                        css={css`
                            @media ${({ theme }) => theme.media.md} {
                                display: none;
                            }
                        `}
                    />
                    <LogoGraphic
                        css={css`
                            display: none;

                            @media ${({ theme }) => theme.media.md} {
                                display: inline;
                            }
                        `}
                    />
                </LinkElement>
                <nav
                    css={css`
                        display: none;

                        @media ${({ theme }) => theme.media.md} {
                            display: block;
                            margin-left: ${({ theme }) => theme.space[3]};
                        }
                    `}
                >
                    <ListElement
                        $variant="plain"
                        css={css`
                            display: flex;

                            li + li {
                                margin-left: ${({ theme }) => theme.space[3]};
                            }
                        `}
                    >
                        <li>
                            <LinkElement as={NavLink} to="/tattoo" $variant="layout">
                                Tatuajes
                            </LinkElement>
                        </li>
                        <li>
                            <LinkElement as={NavLink} to="/artist" $variant="layout">
                                Artistas
                            </LinkElement>
                        </li>
                        <li>
                            <LinkElement as={NavLink} to="/studio" $variant="layout">
                                Estudios
                            </LinkElement>
                        </li>
                    </ListElement>
                </nav>
            </div>
            <div
                css={css`
                    display: flex;
                    align-items: center;
                `}
            >
                <ButtonElement
                    type="button"
                    onClick={() => props.setMenu(true)}
                    $variant="plain"
                    css={css`
                        @media ${({ theme }) => theme.media.md} {
                            display: none;
                        }
                    `}
                >
                    <MenuGraphic />
                </ButtonElement>
            </div>
        </header>
    );
}

export interface HeaderLayoutProps {
    setMenu: Dispatch<SetStateAction<boolean>>;
}
