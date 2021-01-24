import styled, { css } from "styled-components";
import { AtLeastOne } from "../declarations/common";
import { ImageApiArgs, imageApi } from "../utils/imageUtil";

const coverVariant = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageElement = styled.img.attrs<AtLeastOne<ImageElementProps>>(({ $api }) => {
    if (!$api) {
        return;
    }

    return imageApi({ path: $api.path, width: $api.width, height: $api.height });
})<AtLeastOne<ImageElementProps>>`
    ${({ $variant }) => $variant === "cover" && coverVariant};
`;

export default ImageElement;

export interface ImageElementProps {
    $variant: "cover";
    $api: ImageApiArgs;
}
