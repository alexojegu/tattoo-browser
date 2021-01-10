import { ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import LinkElement from "../elements/linkElement";
import ListElement from "../elements/listElement";
import IconGraphic from "../graphics/iconGraphic.svg";
import LogoGraphic from "../graphics/logoGraphic.svg";

const MenuLink = styled(LinkElement)`
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export default function HeaderLayout(): ReactElement {
    return (
        <header
            css={css`
                z-index: ${({ theme }) => theme.zIndices[0]};
                position: sticky;
                top: 0px;
                display: flex;
                align-items: center;
                height: ${({ theme }) => theme.sizes.header};
                padding-right: ${({ theme }) => theme.space[2]};
                padding-left: ${({ theme }) => theme.space[2]};

                ${({ theme }) => theme.mediaQueries[1]} {
                    padding-right: ${({ theme }) => theme.space[4]};
                    padding-left: ${({ theme }) => theme.space[4]};
                }
            `}
        >
            <div
                css={css`
                    margin-right: ${({ theme }) => theme.space[3]};
                `}
            >
                <LinkElement as={Link} to="/" variant="plain">
                    <IconGraphic
                        css={css`
                            ${({ theme }) => theme.mediaQueries[1]} {
                                display: none;
                            }
                        `}
                    />
                    <LogoGraphic
                        css={css`
                            display: none;

                            ${({ theme }) => theme.mediaQueries[1]} {
                                display: inline;
                            }
                        `}
                    />
                </LinkElement>
            </div>
            <nav
                css={css`
                    display: none;

                    ${({ theme }) => theme.mediaQueries[1]} {
                        display: block;
                    }
                `}
            >
                <ListElement
                    variant="plain"
                    css={css`
                        display: flex;

                        li + li {
                            margin-left: ${({ theme }) => theme.space[3]};
                        }
                    `}
                >
                    <li>
                        <MenuLink as={NavLink} to="/tattoo" variant="plain">
                            Tatuajes
                        </MenuLink>
                    </li>
                    <li>
                        <MenuLink as={NavLink} to="/artist" variant="plain">
                            Artistas
                        </MenuLink>
                    </li>
                    <li>
                        <MenuLink as={NavLink} to="/studio" variant="plain">
                            Estudios
                        </MenuLink>
                    </li>
                </ListElement>
            </nav>
        </header>
    );
}
