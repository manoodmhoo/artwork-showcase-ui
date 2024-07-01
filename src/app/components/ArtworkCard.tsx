"use client"

import Image from "next/image";
import { IoMdHeart } from "react-icons/io";

type ArtworkCardProps = {
    artworkList: any;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artworkList }) => {

    console.log(artworkList);

    return (
        <div className="flex flex-col items-center md:items-start w-auto justify-center">
            <Image
                className="rounded-tr-lg rounded-bl-lg aspect-square object-cover"
                src={artworkList.imgPath}
                alt={artworkList._id}
                width={268.59}
                height={268.59}
            />
            {/* <div className="flex justify-between items-center py-1">
                <div className="flex gap-2 items-center">
                    <Image
                        className="rounded-full aspect-square object-cover"
                        src={artist_img}
                        alt={artist_name}
                        width={20}
                        height={10}
                    />
                    <p className="text-primary text-[11.25px]">{artist_name}</p>
                </div>
                <div className="flex items-center">
                    <IoMdHeart className="text-primary" size={20} />
                    <p className="text-primary text-[11.25px]">{likes}</p>
                </div>
            </div> */}
        </div>
    )
}

export default ArtworkCard;