"use client"
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="z-10">
            <div className="w-full flex justify-center py-4">
                <div className="flex-grow border-t-4 border-blue-500 transform translate-y-1/2"></div>

                <div className="relative rounded-full border-4 border-blue-500">
                    <Image
                        className="rounded-full"
                        src="/W-logo.jpg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />

                </div>
                <div className="flex-grow border-t-4 border-blue-500 transform translate-y-1/2"></div>
            </div>
            <div>
                <h1 className="text-white text-center text-2xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>
                    Entertainment_And_Info
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-4 p-4">
                <button className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => window.open('https://www.youtube.com/@Entertainment_And_Info/?sub_confirmation=1', '_blank')}>
                    Subscribe
                </button>
                <button className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => window.open('https://www.youtube.com/@Entertainment_And_Info/shorts', '_blank')}>
                    Watch Videos
                </button>
                <button className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => window.open('https://www.youtube.com/@Entertainment_And_Info/community', '_blank')}>
                    Join Community
                </button>
                <button className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => window.open('https://www.youtube.com/@Entertainment_And_Info/about', '_blank')}>
                    About Us
                </button>
            </div>

        </div>
    )
}
