import { gql } from "@apollo/client";

export const INDEX_STUDIO = gql`
    query indexStudio($limit: Int!, $cursor: String, $tattooLimit: Int!) {
        studios(limit: $limit, cursor: $cursor) {
            nodes {
                id
                tattoos(limit: $tattooLimit) {
                    nodes {
                        id
                        image
                    }
                }
                name
                image
            }
        }
    }
`;

export const DETAIL_STUDIO = gql`
    query detailStudio($id: ID!) {
        studio(id: $id) {
            id
            name
            image
            website
            instagram
            facebook
            phone
            address
            location
            about
        }
    }
`;

export interface IndexStudioData {
    studios: {
        nodes: {
            id: string;
            name: string;
            image: string;
            tattoos: {
                nodes: {
                    id: string;
                    image: string;
                    __typename?: string;
                }[];
                __typename?: string;
            };
            __typename?: string;
        }[];
        __typename?: string;
    };
}

export interface IndexStudioVars {
    limit: number;
    cursor?: string;
    tattooLimit: number;
}

export interface DetailStudioData {
    studio?: {
        id: string;
        name: string;
        image: string;
        website?: string;
        instagram?: string;
        facebook?: string;
        phone: string;
        address: string;
        location: number[];
        about: string;
        __typename?: string;
    };
}

export interface DetailStudioVars {
    id: string | number;
}
