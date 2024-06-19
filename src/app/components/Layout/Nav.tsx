"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
    const router = useRouter();

    const handleSignInButton = () => router.push('/auth');

    return (
        <>
            <nav className="fixed flex justify-between items-center bg-tertiary w-full h-[78.5px] px-[24px]">
                <Link href="/">
                    <Image 
                        src="/img/logo.png"
                        alt="logo"
                        width={143}
                        height={35}
                    />
                </Link>

                <ul className="flex justify-between items-center w-[447px] text-secondary">
                    <li>
                        <Link href="#count-section">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#artworks-section">
                            Artworks
                        </Link>
                    </li>
                    <li>
                        <Link href="#artists-section">
                            Artist
                        </Link>
                    </li>
                    <li>
                        <Link href="#awards-section">
                            Awards
                        </Link>
                    </li>
                </ul>
                
                <button className="bg-primary text-white w-[135px] h-[35px] rounded-[8px]" onClick={() => handleSignInButton()}>
                    Log in
                </button>
            </nav>
        </>
    )
}

export default Nav;