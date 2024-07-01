import React from "react";
import ArtworkCard from "./ArtworkCard";

type ArtworkProps = {
    artworks: any[];
}

const Artwork: React.FC<ArtworkProps> = ({ artworks }) => {
    
    return (
        <>
           { artworks ? (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:gap-4">
                    { artworks.map((artwork) => ( 
                        <ArtworkCard
                        key={artwork._id} 
                        artworkList={artwork}
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