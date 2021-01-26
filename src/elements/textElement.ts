import styled, { css } from "styled-components";

const textVariants = {
    line: css`
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    `,
};

const TextElement = styled.span<TextElementProps>`
    ${({ $variant }) => $variant && textVariants[$variant]};
`;

export default TextElement;

export interface TextElementProps {
    $variant: keyof typeof textVariants;
}
