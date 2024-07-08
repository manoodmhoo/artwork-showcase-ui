"use client";

import axios from "axios";
import Nav from "@/app/components/Layout/Nav";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
    const router = useRouter();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitRegister = async (e: any) => {
        e.preventDefault();

        const configs = {
            "headers": {
                "Content-Type": "application/json"
            }
        }

        try {
            if(password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            const submitData = {
                firstname,
                lastname,
                email,
                role: "user",
                password,
            }
            
            const { data }: any = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, submitData, configs);

            if(data.statusCode == 200) {
                alert("Registration successful");
                router.push("/auth");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-tertiary">
            <Nav/>
            <div className="flex items-center justify-center w-full h-screen">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg w-[650px] h-[600px] border border-[#ddd]">
                    <Image 
                        src="/img/logo.png"
                        alt="Artwork Showcase Logo"
                        width={143.44}
                        height={35.86}
                    />

                    <form onSubmit={submitRegister} className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-[#ddd] mb-1" htmlFor="firstname">Firstname</label>
                                <input 
                                    type="text" 
                                    id="firstname" 
                                    onChange={(e) => setFirstname(e.target.value)}
                                    value={firstname}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#ddd] mb-1" htmlFor="lastname">Lastname</label>
                                <input 
                                    type="text" 
                                    id="lastname" 
                                    onChange={(e) => setLastname(e.target.value)}
                                    value={lastname}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#ddd] mb-1" htmlFor="email">E-mail</label>
                            <input 
                            type="email" 
                            id="email" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#ddd] mb-1" htmlFor="password">Password</label>
                            <input
                                type="password" 
                                id="password" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" />
                        </div>
      
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-[#ddd] mb-1" htmlFor="confirm-password">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirm-password" 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500" />
                        </div>
      
                        <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Register</button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? <a href="/auth" className="text-teal-600 hover:text-teal-700">Login</a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Register;