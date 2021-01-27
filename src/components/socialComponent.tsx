import { ReactElement } from "react";
import { css } from "styled-components";
import LinkElement from "../elements/linkElement";
import ListElement from "../elements/listElement";
import EarthGraphic from "../graphics/earthGraphic.svg";
import FacebookGraphic from "../graphics/facebookGraphic.svg";
import InstagramGraphic from "../graphics/instagramGraphic.svg";

export default function SocialComponent(props: SocialComponentProps): ReactElement | null {
    if (!props.website && !props.instagram && !props.facebook) {
        return null;
    }

    return (
        <ListElement
            $variant="plain"
            css={css`
                display: flex;

                li + li {
                    margin-left: ${({ theme }) => theme.space[1]};
                }
            `}
            className={props.className}
        >
            {props.website && (
                <li>
                    <LinkElement href={props.website} target="_blank" $variant="plain">
                        <EarthGraphic />
                    </LinkElement>
                </li>
            )}
            {props.instagram && (
                <li>
                    <LinkElement href={props.instagram} target="_blank" $variant="plain">
                        <InstagramGraphic />
                    </LinkElement>
                </li>
            )}
            {props.facebook && (
                <li>
                    <LinkElement href={props.facebook} target="_blank" $variant="plain">
                        <FacebookGraphic />
                    </LinkElement>
                </li>
            )}
        </ListElement>
    );
}

export interface SocialComponentProps {
    website?: string;
    instagram?: string;
    facebook?: string;
    className?: string;
}
