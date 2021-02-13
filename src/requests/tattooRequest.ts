import { gql } from "@apollo/client";

export const INDEX_TATTOO = gql`
    query indexTattoo($limit: Int!, $cursor: String) {
        tattoos(limit: $limit, cursor: $cursor) {
            nodes {
                id
                image
                width
                height
            }
        }
    }
`;

export const DETAIL_TATTOO = gql`
    query detailTattoo($id: ID!) {
        tattoo(id: $id) {
            id
            image
            width
            height
        }
    }
`;

export interface IndexTattooData {
    tattoos: {
        nodes: {
            id: string;
            image: string;
            width: number;
            height: number;
            __typename?: string;
        }[];
        __typename?: string;
    };
}

export interface IndexTattooVars {
    limit: number;
    cursor?: string;
}

export interface DetailTattooData {
    tattoo?: {
        id: string;
        image: string;
        width: number;
        height: number;
        __typename?: string;
    };
}

export interface DetailTattooVars {
    id: string | number;
}
