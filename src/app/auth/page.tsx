"use client";

import axios from "axios";
import { cookies } from "next/headers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie"
import Nav from "../components/Layout/Nav";

const SignIn = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitSignIn = async (e: any) => {
        e.preventDefault();
        
        const configs = {
            "headers": {
                "Content-Type": "application/json"
            }
        }

        try {
            const { data }: any = await axios.post("http://localhost:3333/auth/login", {
                email,
                password
            }, configs);
            
            if(data.statusCode == 201) {
                Cookies.set("token", data.user.token);
                Cookies.set("userData", JSON.stringify(data.user));
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between  bg-tertiary">
            <Nav/>
            <div className="flex items-center justify-center w-full h-screen">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg w-[520px] h-[542px] border border-[#ddd]">
                    <Image 
                        src="/img/logo.png"
                        alt="Artwork Showcase Logo"
                        width={143.44}
                        height={35.86}
                    />

                    <form onSubmit={submitSignIn}>
                        <div className="flex flex-col gap-4 mt-8 w-[300px]">
                            <div className="flex flex-col">
                                <label htmlFor="email" className=" text-[#ddd]">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder="Email" 
                                    className="w-full p-2 border border-[#ddd] rounded-lg"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Password" className="text-[#ddd]">Password</label>
                                <input 
                                    type="password" 
                                    id="Password"
                                    placeholder="Password" 
                                    className="w-full p-2 border border-[#ddd] rounded-lg"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="w-full p-2 bg-primary text-white rounded-lg">Log In</button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-4">
                        <p><a href="/auth/register" className="text-gray-500">Create an account</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignIn;