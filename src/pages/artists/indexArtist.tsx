import { useQuery } from "@apollo/client";
import { ReactElement } from "react";
import { Redirect } from "react-router-dom";
import BoxElement from "../../elements/boxElement";
import { INDEX_ARTIST, IndexArtistData, IndexArtistVars } from "../../requests/artistRequest";

export default function IndexArtist(): ReactElement | null {
    const { error, loading, data } = useQuery<IndexArtistData, IndexArtistVars>(INDEX_ARTIST, {
        variables: { limit: 20, tattooLimit: 1 },
    });

    if (error) {
        return <Redirect to="/error" />;
    }

    if (loading) {
        return null;
    }

    if (!data?.artists.nodes.length) {
        return <Redirect to="/error" />;
    }

    return (
        <BoxElement variant="page">
            {data.artists.nodes.map((node) => (
                <div key={node.id}>{node.account.name}</div>
            ))}
        </BoxElement>
    );
}
