import { ElementType } from "react";
import styled, { css } from "styled-components";

const headingVariants = {
    h1: css`
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: ${({ theme }) => theme.fontSizes[5]};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
    `,
    h2: css`
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: ${({ theme }) => theme.fontSizes[4]};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
    `,
};

const HeadingElement = styled.h1.attrs<HeadingElementProps>(({ as, $variant }) => {
    if (!as) {
        return { as: $variant };
    }

    return;
})<HeadingElementProps>`
    ${({ $variant }) => $variant && headingVariants[$variant]};
`;

export default HeadingElement;

export interface HeadingElementProps {
    as?: ElementType;
    $variant: keyof typeof headingVariants;
}
