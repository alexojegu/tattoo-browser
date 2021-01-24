import { ReactElement } from "react";
import { css } from "styled-components";
import ImageElement from "../elements/imageElement";

export default function AvatarComponent(props: AvatarComponentProps): ReactElement {
    return (
        <div
            css={css`
                min-width: 48px;
                min-height: 48px;
                border-radius: ${props.square ? ({ theme }) => theme.radii[1] : "50%"};
                overflow: hidden;
            `}
            className={props.className}
        >
            <ImageElement loading="lazy" alt={props.name} $api={{ path: props.image, width: 48, height: 48 }} />
        </div>
    );
}

export interface AvatarComponentProps {
    square?: boolean;
    image: string;
    name: string;
    className?: string;
}
