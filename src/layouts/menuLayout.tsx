import { Dispatch, ReactElement, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { css } from "styled-components";
import ButtonElement from "../elements/buttonElement";
import LinkElement from "../elements/linkElement";
import ListElement from "../elements/listElement";
import CloseGraphic from "../graphics/closeGraphic.svg";

export default function MenuLayout(props: MenuLayoutProps): ReactElement {
    return (
        <div
            css={css`
                z-index: ${({ theme }) => theme.zIndices[1]};
                position: fixed;
                width: 100%;
                height: 100%;
            `}
        >
            <div
                onClick={() => props.setMenu(false)}
                css={css`
                    width: 100%;
                    height: 100%;
                    background-color: #000000;
                    opacity: 0.5;
                `}
            ></div>
            <div
                css={css`
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: ${({ theme }) => theme.sizes.menu};
                    height: 100%;
                    background: ${({ theme }) => theme.colors.bg.primary};
                `}
            >
                <div
                    css={css`
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        height: ${({ theme }) => theme.sizes.header};
                        border-bottom: ${({ theme }) => theme.borders[0]};
                        border-color: ${({ theme }) => theme.colors.border.primary};
                        padding-right: ${({ theme }) => theme.space[2]};
                        padding-left: ${({ theme }) => theme.space[2]};
                    `}
                >
                    <ButtonElement type="button" onClick={() => props.setMenu(false)} $variant="plain">
                        <CloseGraphic />
                    </ButtonElement>
                </div>
                <nav
                    css={css`
                        padding-right: ${({ theme }) => theme.space[3]};
                        padding-left: ${({ theme }) => theme.space[3]};
                    `}
                >
                    <ListElement
                        $variant="plain"
                        css={css`
                            li {
                                border-bottom: ${({ theme }) => theme.borders[0]};
                                border-color: ${({ theme }) => theme.colors.border.secondary};
                                padding-top: ${({ theme }) => theme.space[2]};
                                padding-bottom: ${({ theme }) => theme.space[2]};
                            }
                        `}
                    >
                        <li>
                            <LinkElement
                                as={NavLink}
                                to="/tattoo"
                                onClick={() => props.setMenu(false)}
                                $variant="layout"
                            >
                                Tatuajes
                            </LinkElement>
                        </li>
                        <li>
                            <LinkElement
                                as={NavLink}
                                to="/artist"
                                onClick={() => props.setMenu(false)}
                                $variant="layout"
                            >
                                Artistas
                            </LinkElement>
                        </li>
                        <li>
                            <LinkElement
                                as={NavLink}
                                to="/studio"
                                onClick={() => props.setMenu(false)}
                                $variant="layout"
                            >
                                Estudios
                            </LinkElement>
                        </li>
                    </ListElement>
                </nav>
            </div>
        </div>
    );
}

export interface MenuLayoutProps {
    setMenu: Dispatch<SetStateAction<boolean>>;
}
