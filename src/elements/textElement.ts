import styled, { css } from "styled-components";

const lineVariant = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const TextElement = styled.span<TextElementProps>`
    ${({ $variant }) => $variant === "line" && lineVariant};
`;

export default TextElement;

export interface TextElementProps {
    $variant: "line";
}
