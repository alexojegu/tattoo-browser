import { gql } from "@apollo/client";

export const INDEX_ARTIST = gql`
    query indexArtist($limit: Int!, $cursor: String, $tattooLimit: Int!) {
        artists(limit: $limit, cursor: $cursor) {
            nodes {
                id
                account {
                    id
                    name
                    image
                }
                tattoos(limit: $tattooLimit) {
                    nodes {
                        id
                        image
                    }
                }
            }
        }
    }
`;

export const DETAIL_ARTIST = gql`
    query detailArtist($id: ID!, $tattooLimit: Int!, $tattooCursor: String) {
        artist(id: $id) {
            id
            account {
                id
                name
                image
            }
            tattoos(limit: $tattooLimit, cursor: $tattooCursor) {
                nodes {
                    id
                    image
                    width
                    height
                }
            }
            website
            instagram
            facebook
        }
    }
`;

export interface IndexArtistData {
    artists: {
        nodes: {
            id: string;
            account: {
                id: string;
                name: string;
                image: string;
            };
            tattoos: {
                nodes: {
                    id: string;
                    image: string;
                }[];
            };
        }[];
    };
}

export interface IndexArtistVars {
    limit: number;
    cursor?: string;
    tattooLimit: number;
}

export interface DetailArtistData {
    artist?: {
        id: string;
        account: {
            id: string;
            name: string;
            image: string;
        };
        tattoos: {
            nodes: {
                id: string;
                image: string;
                width: number;
                height: number;
            }[];
        };
        website?: string;
        instagram?: string;
        facebook?: string;
    };
}

export interface DetailArtistVars {
    id: string | number;
    tattooLimit: number;
    tattooCursor?: string;
}
