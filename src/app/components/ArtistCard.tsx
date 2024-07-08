"use client"

import Image from "next/image";

interface ArtistCardProps {
    artistList: any;
    users: any[];
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artistList, users }) => {

    const user = users.find((user) => user._id === artistList.userId);
    const artist_name = `${user?.firstname} ${user?.lastname}`;

    return (
        <div className="flex flex-col lg:flex-row w-[304px] lg:w-[592.45px] h-[495px] lg:h-[337.5px] justify-center gap-2 bg-aliceblue rounded-tr-lg rounded-bl-lg p-4 mx-4">
            <Image
                className="rounded-tr-lg rounded-bl-lg w-full lg:w-1/2 object-cover h-[282px]"
                src={user?.imgPath}
                alt={artist_name}
                width={228}
                height={282}
            />
            <div className="flex flex-col justify-center items-start px-4 text-balance py-1 w-full lg:w-1/2">
                <p className="text-black font-semibold text-[16.88px]">{artist_name}</p>
                <p className="text-black text-[12.66px]">{artistList.bio}</p>
            </div>
        </div>
    )
}

export default ArtistCard;