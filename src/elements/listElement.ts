import styled, { css } from "styled-components";

const plainVariant = css`
    margin-bottom: 0px;
    margin-top: 0px;
    padding-left: 0px;
    list-style: none;
`;

const ListElement = styled.ul<ListElementProps>`
    ${({ $variant }) => $variant === "plain" && plainVariant};
`;

export default ListElement;

export interface ListElementProps {
    $variant: "plain";
}
