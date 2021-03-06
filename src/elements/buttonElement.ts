import styled, { css } from "styled-components";

const buttonVariants = {
    outline: css`
        border: ${({ theme }) => theme.borders[0]};
        border-color: ${({ theme }) => theme.colors.border.primary};
        border-radius: ${({ theme }) => theme.radii[0]};
        padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
        font-size: ${({ theme }) => theme.fontSizes[1]};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        white-space: nowrap;
        background: inherit;
        color: inherit;
        appearance: none;
        cursor: pointer;
    `,
    plain: css`
        border: none;
        padding: 0px;
        background: inherit;
        color: inherit;
        appearance: none;
        cursor: pointer;
    `,
};

const ButtonElement = styled.button<ButtonElementProps>`
    ${({ $variant }) => $variant && buttonVariants[$variant]};
`;

export default ButtonElement;

export interface ButtonElementProps {
    $variant: keyof typeof buttonVariants;
}
