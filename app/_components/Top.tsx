"use client"
import Image from "next/image";
import Link from "next/link";

export default function Top() {
    return (
        <>
        <div className="bg-[#020024] bg-gradient-to-r from-[#00d4ff] via-[#090979] via-50% to-[#00d4ff] flex justify-between items-center">
            <div className="flex flex-row items-center gap-3 p-1">
                <Image
                    className="px-3"
                    src="/yt.png"
                    alt="Next.js logo"
                    width={100}
                    height={35}
                    priority
                />
                <h1 className="text-3xl font-bold text-white">Entertainment_And_Info</h1>
            </div>
            {/* buttons */}
            <div className="p-2 items-center flex flex-row gap-5 mx-5">
                <Link href="/about">
                    <button className="bg-[#020024] border border-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer">
                        About
                    </button>
                </Link>
                <Link href="/blogs">
                    <button className="bg-[#020024] border border-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer">
                        Blogs
                    </button>
                </Link>
                <Link href="/contact">
                    <button className="bg-[#020024] border border-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer">
                        Contact
                    </button>
                </Link>
            </div>
            
        </div>
        <div className="flex-grow border-t-2 border-red-500 transform translate-y-1/2"></div>
        </>

    )
}
