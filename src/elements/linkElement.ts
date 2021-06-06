import styled, { css } from "styled-components";

const linkVariants = {
    layout: css`
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        text-decoration: none;
        color: inherit;
    `,
    plain: css`
        text-decoration: none;
        color: inherit;
    `,
};

const LinkElement = styled.a<LinkElementProps>`
    ${({ $variant }) => $variant && linkVariants[$variant]};
`;

export default LinkElement;

export interface LinkElementProps {
    $variant: keyof typeof linkVariants;
}
