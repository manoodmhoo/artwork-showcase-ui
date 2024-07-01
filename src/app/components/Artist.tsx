import React from "react";
import ArtistCard from "./ArtistCard";

type ArtistProps = {
    artists: any[];
    users: any[];
}

const Artist: React.FC<ArtistProps> = ({ artists, users }) => {
    
    return (
        <>
           { artists ? (
            <>
                <div className="flex justify-start gap-4 overflow-x-auto w-fit h-fit">
                    { artists.map((artist) => ( 
                        <ArtistCard
                            key={artist._id} 
                            artistList={artist}
                            users={users}
                        />))   
                    }
                </div>
            </>
           ) : (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl">No Artists Available</p>
            </div>
           )}

            
        </>
    )
}

export default Artist;