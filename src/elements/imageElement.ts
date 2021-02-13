import styled, { css } from "styled-components";
import { AtLeastOne } from "../declarations/common";
import { ImageApiArgs, MapApiArgs, imageApi, mapApi } from "../utils/imageUtil";

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
    if ($api) {
        if ($api.type === "image") {
            return imageApi($api);
        }

        if ($api.type === "map") {
            return mapApi($api);
        }
    }

    return;
})<AtLeastOne<ImageElementProps>>`
    ${({ $variant }) => $variant && imageVariants[$variant]};
`;

export default ImageElement;

export interface ImageElementProps {
    $variant: keyof typeof imageVariants;
    $api: ({ type: "image" } & ImageApiArgs) | ({ type: "map" } & MapApiArgs);
}
