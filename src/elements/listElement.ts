import styled, { css } from "styled-components";

const listVariants = {
    plain: css`
        margin-bottom: 0px;
        margin-top: 0px;
        padding-left: 0px;
        list-style: none;
    `,
};

const ListElement = styled.ul<ListElementProps>`
    ${({ $variant }) => $variant && listVariants[$variant]};
`;

export default ListElement;

export interface ListElementProps {
    $variant: keyof typeof listVariants;
}
