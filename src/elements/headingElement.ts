import styled, { css } from "styled-components";

const headingVariants = {
    h1: css`
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: ${({ theme }) => theme.fontSizes[5]};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
    `,
};

const HeadingElement = styled.h1.attrs<HeadingElementProps>(({ as, $variant }) => {
    if (as) {
        return;
    }

    return { as: $variant };
})<HeadingElementProps>`
    ${({ $variant }) => $variant && headingVariants[$variant]};
`;

export default HeadingElement;

export interface HeadingElementProps {
    as?: unknown;
    $variant: keyof typeof headingVariants;
}
