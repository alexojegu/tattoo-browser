import { Children, ReactElement, ReactNode } from "react";
import { css } from "styled-components";

function createColumns(number: number, children: ReactNode): ReactNode[][] {
    const columns: ReactNode[][] = [...new Array(number)].map(() => []);

    Children.forEach(children, (child, index) => columns[index % number].push(child));

    return columns;
}

export default function MasonryComponent(props: MasonryComponentProps): ReactElement {
    const columns = createColumns(props.columns, props.children);

    return (
        <div
            css={css`
                display: grid;
                grid-template-columns: repeat(${props.columns}, 1fr);
                gap: ${({ theme }) => theme.space[3]};
            `}
            className={props.className}
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
    columns: number;
    children: ReactNode;
    className?: string;
}
