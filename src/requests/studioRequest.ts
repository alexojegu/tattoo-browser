import { gql } from "@apollo/client";

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
