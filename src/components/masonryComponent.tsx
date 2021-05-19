import { Children, ReactElement, ReactNode, useEffect, useState } from "react";
import { DefaultTheme, css, useTheme } from "styled-components";
import useResponsive from "../hooks/responsiveHook";

function createColumns(number: number, children: ReactNode): ReactNode[][] {
    const columns: ReactNode[][] = [...new Array(number)].map(() => []);

    Children.forEach(children, (child, index) => columns[index % number].push(child));

    return columns;
}

export default function MasonryComponent(props: MasonryComponentProps): ReactElement {
    const [columns, setColumns] = useState<ReactNode[][]>([]);
    const matches = useResponsive(useTheme().media);

    useEffect(() => {
        let result = 1;

        (Object.keys(matches) as (keyof typeof matches)[]).forEach((key) => {
            if (matches[key] && props.columns[key]) {
                result = props.columns[key] as number;
            }
        });

        setColumns(createColumns(result, props.children));
    }, [props, matches]);

    return (
        <div
            className={props.className}
            css={css`
                display: grid;
                grid-template-columns: repeat(${columns.length}, 1fr);
                gap: ${({ theme }) => theme.space[3]};
            `}
        >
            {columns.map((column, index) => (
                <div
                    key={index}
                    css={css`
                        display: flex;
                        flex-direction: column;
                        gap: ${({ theme }) => theme.space[3]};
                    `}
                >
                    {column}
                </div>
            ))}
        </div>
    );
}

export interface MasonryComponentProps {
    columns: Partial<Record<keyof DefaultTheme["media"], number>>;
    children: ReactNode;
    className?: string;
}
