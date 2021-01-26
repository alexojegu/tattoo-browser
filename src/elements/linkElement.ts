import styled, { css } from "styled-components";

const linkVariants = {
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
