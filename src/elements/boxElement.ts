import styled, { css } from "styled-components";

const boxVariants = {
    page: css`
        align-self: center;
        max-width: ${({ theme }) => theme.sizes.content};
        width: 100%;
        padding-right: ${({ theme }) => theme.space[2]};
        padding-left: ${({ theme }) => theme.space[2]};

        @media ${({ theme }) => theme.media.md} {
            padding-right: ${({ theme }) => theme.space[4]};
            padding-left: ${({ theme }) => theme.space[4]};
        }
    `,
};

const BoxElement = styled.div<BoxElementProps>`
    ${({ $variant }) => $variant && boxVariants[$variant]};
`;

export default BoxElement;

export interface BoxElementProps {
    $variant: keyof typeof boxVariants;
}
