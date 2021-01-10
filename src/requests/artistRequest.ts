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
