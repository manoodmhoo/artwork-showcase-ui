"use client"

import Image from "next/image";

interface ArtistCardProps {
    artist_img: string;
    artist_name: string;
    bio: string;
}

const ArtistCard = ({ artist_img, artist_name, bio}: ArtistCardProps) => {

    return (
        <div className="flex w-fit justify-center gap-2 bg-aliceblue rounded-tr-lg rounded-bl-lg p-4 mx-2">
            <Image
                className="rounded-tr-lg rounded-bl-lg w-1/2"
                src={artist_img}
                alt={artist_name}
                width={228}
                height={282}
            />
            <div className="flex flex-col justify-center items-start px-4 text-balance py-1 w-1/2">
                <p className="text-black font-semibold text-[16.88px]">{artist_name}</p>
                <p className="text-black text-[12.66px]">{bio}</p>
            </div>
        </div>
    )
}

export default ArtistCard;