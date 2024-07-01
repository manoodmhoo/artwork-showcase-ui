"use client"

import Image from "next/image";
import { IoMdHeart } from "react-icons/io";

type ArtworkCardProps = {
    artworkList: any;
    artists: any[];
    users: any[];
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artworkList, artists, users }) => {

    const artist = artists.find((artist) => artist._id === artworkList.artistId);
    const user = users.find((user) => user._id === artist?.userId);
    const artist_name = `${user?.firstname} ${user?.lastname}`;
   

    return (
        <div className="flex flex-col items-center justify-center w-[268.69px]">
            <Image
                className="rounded-tr-lg rounded-bl-lg aspect-square object-cover"
                src={artworkList.imgPath}
                alt={artworkList._id}
                width={268.59}
                height={268.59}
            />
            <div className="flex justify-between items-center py-1 w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        className="rounded-full aspect-square object-cover"
                        src={user.imgPath}
                        alt={artist_name}
                        width={20}
                        height={10}
                    />
                    <p className="text-primary text-[11.25px]">{artist_name}</p>
                </div>
                <div className="flex items-center">
                    <IoMdHeart className="text-primary" size={20} />
                    <p className="text-primary text-[11.25px]">100</p>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard;