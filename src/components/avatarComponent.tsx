import { ReactElement } from "react";
import { css } from "styled-components";
import ImageElement from "../elements/imageElement";

const avatarSizes = {
    medium: "48px",
    large: "128px",
};

export default function AvatarComponent(props: AvatarComponentProps): ReactElement {
    const size = Number.parseInt(avatarSizes[props.size]);

    return (
        <div
            className={props.className}
            css={css`
                min-width: ${avatarSizes[props.size]};
                width: ${avatarSizes[props.size]};
                height: ${avatarSizes[props.size]};
                border-radius: ${props.square ? ({ theme }) => theme.radii[1] : "50%"};
                background: ${({ theme }) => theme.colors.bg.placeholder};
                overflow: hidden;
            `}
        >
            <ImageElement
                loading="lazy"
                alt={props.name}
                $api={{ kind: "image", image: props.image, width: size, height: size }}
            />
        </div>
    );
}

export interface AvatarComponentProps {
    square?: boolean;
    size: keyof typeof avatarSizes;
    image: string;
    name: string;
    className?: string;
}
