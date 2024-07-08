"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { parseCookies } from "nookies"
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);
    const [menuClick, setMenuClick] = useState(false);

    useEffect(() => {
        const { userData } = parseCookies();
        if(userData) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [loggedIn]);

    const handleSignInButton = () => router.push('/auth');

    const handleSignOutButton = () => {
        setLoggedIn(false);
        Cookies.remove("userData");
        Cookies.remove("token");
        router.push("/auth");
    }

    const handleMenuClick = () => {
        setMenuClick(!menuClick);
        console.log(menuClick);
    }

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

                <div className="hidden xl:flex">
                    <ul className="flex justify-between items-center w-[447px] text-secondary mr-[400px]">
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
                    { loggedIn ? (
                        <button className="bg-primary text-white w-[135px] h-[35px] rounded-[8px]" onClick={() => handleSignOutButton()}>
                            Log Out
                        </button>
                    ) : (
                        <button className="bg-primary text-white w-[135px] h-[35px] rounded-[8px]" onClick={() => handleSignInButton()}>
                            Sign in
                        </button>
                    )}
                </div>
                
                <div className="block xl:hidden">
                    <GiHamburgerMenu size={30} onClick={() => handleMenuClick()} />
                </div>
                
                { menuClick ? (
                    <div className="xl:hidden flex flex-col bg-tertiary w-[300px] absolute top-0 mt-[78.5px] right-0 shadow-md">
                        <ul className="flex flex-col items-start justify-between  text-secondary">
                            <li className="px-4 py-4">
                                <Link href="#count-section">
                                    About
                                </Link>
                            </li>
                            <li className="px-4 py-4">
                                <Link href="#artworks-section">
                                    Artworks
                                </Link>
                            </li>
                            <li className="px-4 py-4">
                                <Link href="#artists-section">
                                    Artist
                                </Link>
                            </li>
                            <li className="px-4 py-4">
                                <Link href="#awards-section">
                                    Awards
                                </Link>
                            </li>
                        </ul>

                        { loggedIn ? (
                            <button className="text-secondary" onClick={() => handleSignOutButton()}>
                                Log Out
                            </button>
                        ) : (
                            <button className="text-secondary" onClick={() => handleSignOutButton()}>
                                Sign in
                            </button>
                        )}
                    </div>
                ) : null }
            </nav>
        </>
    )
}

export default Nav;