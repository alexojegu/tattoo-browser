import styled, { css } from "styled-components";

const plainVariant = css`
    text-decoration: none;
    color: inherit;
`;

const LinkElement = styled.a.withConfig({ shouldForwardProp: (prop, forward) => forward(prop) })<LinkElementProps>`
    ${({ variant }) => variant === "plain" && plainVariant};
`;

export default LinkElement;

export interface LinkElementProps {
    variant: "plain";
}
