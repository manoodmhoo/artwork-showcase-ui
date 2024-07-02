"use client";

import Image from "next/image";
import Nav from "./components/Layout/Nav";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArtworkCard from "./components/ArtworkCard";
import ArtistCard from "./components/ArtistCard";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { config } from "process";
import Artwork from "./components/Artwork";
import Artist from "./components/Artist";
import Footer from "./components/Layout/Footer";

export default function Home() { 
  const [artworks, setArtworks] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  

  const configs = {
    "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("token")}`
    }
  }

  const getAllArtworks = async () => {
    try {
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/artwork`, configs);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  const getAllArtists = async () => {
    try {
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/artist`, configs);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  const getAllUsers = async () => {
    try {
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`, configs);
      console.log(resp.data);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artWorkResponse, artistResponse, userResponse] = await Promise.all([
          getAllArtworks(),
          getAllArtists(),
          getAllUsers()
        ]);
        setArtworks(artWorkResponse?.data);
        setArtists(artistResponse?.data);
        setUsers(userResponse?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Nav/>
        <section className="cover-section w-full h-[450px] xl:h-[540px] bg-tertiary flex justify-center items-center mt-[78.5px]" id="cover-section">
            <div className="flex justify-center container mx-8 lg:mx-32 xl:mx-64">
                <div className="w-full md:w-1/2">
                    <div className="flex">
                      <h1 className="text-[28px] lg:text-[32px] xl:text-[45px] font-semibold">Unveiling the mastery behind every pixel’s life. Tour our digital art paradise!</h1>
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
                <div className="hidden md:flex justify-center items-center w-1/2">
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
            <div className="container mx-4 lg:mx-32 xl:mx-64 text-center">
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

        <section className="artworks-section w-full h-fit bg-white flex flex-col justify-center items-center py-16" id="artworks-section">
          <div className="container mx-8 lg:mx-32 xl:mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">FEATURED ARTWORK SHOWCASE</h1>
            <p className="text-primary mt-8 text-[14px]">Where creativity knows no bounds and digital art takes center stage. At Stunning digital artworks created by DesignForge members.</p>
          </div>
          <div className="flex justify-center overflow-y-scroll h-fit">
              <Artwork artworks={artworks} artists={artists} users={users} />
            </div>
        </section>

        <section className="artists-section w-full h-fit bg-tertiary flex flex-col justify-center items-center px-[16px]" id="artists-section">
          <div className="container mx-8 lg:mx-32 xl:mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">Artists</h1>
            <p className="text-primary mt-8 text-[14px]">At DesignForge, we take pride in the success and satisfaction of our members. But don't just take our word for it—hear what our community has to say about their experience with DesignForge.</p>
          </div>
          <div className="overflow-x-scroll p-4 w-full h-fit">
            <Artist artists={artists} users={users} />
          </div>
        </section>

        <section className="artists-section w-full h-[334px] bg-tertiary flex justify-center items-center" id="awards-section">
          <div className="container mx-8 lg:mx-32 xl:mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">Awards</h1>
            <p className="text-primary mt-8 text-[14px]">At DesignForge, we believe in celebrating excellence and recognizing the outstanding achievements of our community members.</p>
            <div className="flex justify-center items-center mt-8 gap-4 sm:gap-8 xl:gap-16">
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

        <section className="partner-section w-full h-[291px] bg-tertiary flex flex-col justify-center items-center px-[16px]" id="partner-section">
          <div className="container mx-8 lg:mx-32 xl:mx-64 text-center">
            <h1 className="uppercase text-primary font-extrabold text-[16.88px] tracking-[5px]">Trusted By</h1>
            <p className="text-primary mt-8 text-[14px]">DesignForge is trusted by leading organizations, industry professionals, and creative enthusiasts around the world. Our commitment to excellence, innovation, and community has earned us the trust and recognition of some of the most respected names in the digital art and design industry.</p>
          </div>
          <div className="flex justify-between items-center mt-8 px-8 gap-8 xl:gap-16 overflow-hidden">
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
        <Footer/>
    </main>
  );
}
