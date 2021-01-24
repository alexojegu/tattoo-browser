import { ReactElement } from "react";
import { css } from "styled-components";

export default function FooterLayout(): ReactElement {
    return (
        <footer
            css={css`
                padding-right: ${({ theme }) => theme.space[2]};
                padding-left: ${({ theme }) => theme.space[2]};

                @media ${({ theme }) => theme.media.md} {
                    padding-right: ${({ theme }) => theme.space[4]};
                    padding-left: ${({ theme }) => theme.space[4]};
                }
            `}
        >
            <div
                css={css`
                    margin-top: ${({ theme }) => theme.space[5]};
                    border-top: ${({ theme }) => theme.borders[0]};
                    border-color: ${({ theme }) => theme.colors.border.secondary};
                    padding-top: ${({ theme }) => theme.space[5]};
                    padding-bottom: ${({ theme }) => theme.space[5]};
                `}
            >
                <span
                    css={css`
                        font-size: ${({ theme }) => theme.fontSizes[0]};
                    `}
                >
                    © 2020 Tattoo
                </span>
            </div>
        </footer>
    );
}
