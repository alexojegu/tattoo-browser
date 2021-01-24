import styled, { css } from "styled-components";

const plainVariant = css`
    text-decoration: none;
    color: inherit;
`;

const LinkElement = styled.a<LinkElementProps>`
    ${({ $variant }) => $variant === "plain" && plainVariant};
`;

export default LinkElement;

export interface LinkElementProps {
    $variant: "plain";
}
