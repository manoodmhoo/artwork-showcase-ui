import Image from "next/image";
import Nav from "./components/Layout/Nav";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArtworkCard from "./components/ArtworkCard";
import ArtistCard from "./components/ArtistCard";

export default function Home() { 
  
  const artworks = [
    {
      "id": 1,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 100
    },
    {
      "id": 2,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 20
    },
    {
      "id": 3,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 50
    },
    {
      "id": 4,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 70
    },
    {
      "id": 5,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 80
    },
    {
      "id": 6,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 90
    },
    {
      "id": 7,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 110
    },
    {
      "id": 8,
      "artwork_img": "https://picsum.photos/seed/picsum/300/300",
      "artwork_name": "Artwork 1",
      "artist_name": "John Doe",
      "artist_img": "https://picsum.photos/seed/picsum/200/200",
      "likes": 120
    }
  ];

  const artists = [
    {
      "id": 1,
      "artist_img": "https://picsum.photos/seed/picsum/230/300",
      "artist_name": "John Doe",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien."
    },
    {
      "id": 2,
      "artist_img": "https://picsum.photos/seed/picsum/230/300",
      "artist_name": "John Doe",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien."
    },
    {
      "id": 3,
      "artist_img": "https://picsum.photos/seed/picsum/230/300",
      "artist_name": "John Doe",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien."
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="cover-section w-full h-[540px] bg-tertiary flex justify-center items-center mt-[78.5px]" id="cover-section">
            <div className="flex justify-center container mx-64">
                <div className="w-1/2">
                    <div className="flex">
                      <h1 className="text-[45px] font-semibold">Unveiling the mastery behind every pixel’s life. Tour our digital art paradise!</h1>
                    </div>
                    <div className="flex mt-[8px]">
                        <Link href={"#artworks-section"}
                          className="flex justify-center items-center bg-primary text-white w-[135px] h-[35px] rounded-[8px] mr-[16px]" >
                            See Artworks
                        </Link>
                        <Link href={"#artists-section"}
                          className="flex justify-center items-center bg-tertiary border border-primary text-primary w-[135px] h-[35px] rounded-[8px]">
                            Meet Artists
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center w-1/2">
                  <Image
                      src="/img/cover.png"
                      alt="cover"
                      width={384}
                      height={400}
                  />
                </div>
            </div>
        </section>

        <section className="count-section w-full h-[284px] bg-tertiary flex items-center justify-center" id="count-section">
            <div className="container mx-64 text-center">
              <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">about designforge</h1>
              <p className="text-primary mt-8 text-[14px]">Where creativity knows no bounds and digital art takes center stage. At DesignForge, we believe in the power of imagination to transform pixels into masterpieces, and we're passionate about fostering a vibrant community of digital artists, designers, and enthusiasts from around the globe.</p>

              <div className="flex justify-center items-center mt-8 gap-16">
                <div className="flex flex-col justify-center items-center">
                  <Image
                        src="/img/artists_icon.png"
                        alt="artists"
                        width={35.16}
                        height={35.16}
                  />
                  <p className="text-primary font-extrabold text-[12.66px]">Artists</p>
                  <p className="text-primary font-medium text-[22.55px]">100+</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image
                      src="/img/artworks_icon.png"
                      alt="artworks"
                      width={35.16}
                      height={35.16}
                  />
                  <p className="text-primary font-extrabold text-[12.66px]">Artwork</p>
                  <p className="text-primary font-medium text-[22.55px]">200</p>
                </div>
              </div>
            </div>
        </section>

        <section className="artworks-section w-full h-fit bg-white flex justify-center py-16" id="artworks-section">
          <div className="container mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">FEATURED ARTWORK SHOWCASE</h1>
            <p className="text-primary mt-8 text-[14px]">Where creativity knows no bounds and digital art takes center stage. At Stunning digital artworks created by DesignForge members.</p>

            <div className="grid grid-cols-4 mt-8 gap-4">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id}
                  artwork_img={artwork.artwork_img}
                  artwork_name={artwork.artwork_name}
                  artist_img={artwork.artist_img}
                  artist_name={artwork.artist_name}
                  likes={artwork.likes}
                />
              ))} 
            </div>
          </div>
        </section>

        <section className="artists-section w-full h-fit bg-tertiary flex flex-col justify-center items-center" id="artists-section">
          <div className="container mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">Artists</h1>
            <p className="text-primary mt-8 text-[14px]">At DesignForge, we take pride in the success and satisfaction of our members. But don't just take our word for it—hear what our community has to say about their experience with DesignForge.</p>
          </div>
          <div className="flex mt-8 w-full px-8 overflow-hidden">
            {artists.map((artist) => (
              <ArtistCard key={artist.id}
                artist_img={artist.artist_img}
                artist_name={artist.artist_name}
                bio={artist.bio}
              />
            ))}
          </div>
        </section>

        <section className="artists-section w-full h-[334px] bg-tertiary flex justify-center items-center" id="awards-section">
          <div className="container mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">Awards</h1>
            <p className="text-primary mt-8 text-[14px]">At DesignForge, we believe in celebrating excellence and recognizing the outstanding achievements of our community members.</p>
            <div className="flex justify-center items-center mt-8 gap-16">
                <Image
                  src="/img/awards/awards-1.png"
                  alt="awards"
                  width={143.9}
                  height={70.31}
                />
                <Image
                  src="/img/awards/awards-2.png"
                  alt="awards"
                  width={86.72}
                  height={70.31}
                />
                <Image
                  src="/img/awards/awards-3.png"
                  alt="awards"
                  width={139.27}
                  height={70.31}
                />
                <Image
                  src="/img/awards/awards-4.png"
                  alt="awards"
                  width={143.9}
                  height={70.31}
                />
            </div>
          </div>
        </section>

        <section className="partner-section w-full  h-[291px] bg-tertiary flex flex-col justify-center items-center" id="partner-section">
          <div className="container mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">Trusted By</h1>
            <p className="text-primary mt-8 text-[14px]">DesignForge is trusted by leading organizations, industry professionals, and creative enthusiasts around the world. Our commitment to excellence, innovation, and community has earned us the trust and recognition of some of the most respected names in the digital art and design industry.</p>
            
          </div>
          <div className="flex justify-between items-center mt-8 px-8 gap-16 w-full">
              <Image
                src="/img/partners/logo_1.png"
                alt="Partner"
                height={33.75}
                width={105}
              />
              <Image
                src="/img/partners/logo_2.png"
                alt="Partner"
                height={33.75}
                width={140}
              />
              <Image
                src="/img/partners/logo_3.png"
                alt="Partner"
                height={33.75}
                width={54}
              />
              <Image
                src="/img/partners/logo_4.png"
                alt="Partner"
                height={33.75}
                width={150}
              />
              <Image
                src="/img/partners/logo_5.png"
                alt="Partner"
                height={33.75}
                width={180}
              />
              <Image
                src="/img/partners/logo_6.png"
                alt="Partner"
                height={33.75}
                width={70}
              />
              <Image
                src="/img/partners/logo_7.png"
                alt="Partner"
                height={33.75}
                width={88}
              />
            </div>
        </section>  
    </main>
  );
}
