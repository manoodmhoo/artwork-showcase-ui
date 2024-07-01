import React from "react";
import ArtworkCard from "./ArtworkCard";

type ArtworkProps = {
    artworks: any[];
    artists: any[];
    users: any[];
}

const Artwork: React.FC<ArtworkProps> = ({ artworks, artists, users }) => {
    
    return (
        <>
           { artworks ? (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-2">
                    { artworks.map((artwork) => ( 
                        <ArtworkCard
                        key={artwork._id} 
                        artworkList={artwork}
                        artists={artists}
                        users={users}
                        />))   
                    }
                </div>
            </>
           ) : (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl">No Artworks Available</p>
            </div>
           )}

            
        </>
    )
}

export default Artwork;