import styled, { css } from "styled-components";
import { AtLeastOne } from "../declarations/common";
import { ImageApiArgs, imageApi } from "../utils/imageUtil";

const imageVariants = {
    contain: css`
        width: 100%;
        height: 100%;
        object-fit: contain;
    `,
    cover: css`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,
};

const ImageElement = styled.img.attrs<AtLeastOne<ImageElementProps>>(({ $api }) => {
    if (!$api) {
        return;
    }

    return imageApi($api);
})<AtLeastOne<ImageElementProps>>`
    ${({ $variant }) => $variant && imageVariants[$variant]};
`;

export default ImageElement;

export interface ImageElementProps {
    $variant: keyof typeof imageVariants;
    $api: ImageApiArgs;
}
