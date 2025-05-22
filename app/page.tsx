"use client"
import Image from "next/image";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Top from "./_components/Top";
import Link from "next/link"
import { Toaster } from "@/components/ui/sonner"
import { ToastContainer, toast } from 'react-toastify';
import { CgOptions } from "react-icons/cg";


export default function Home() {
  return (
    <div>
      <Top />
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          src="/new.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
        </video>
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          src="/new2.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
        </video>
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          src="/new3.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
        </video>
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          src="/new4.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
        </video>
      </div>


      <div className="my-20 mx-auto rounded-xl shadow-lg w-full md:w-3/4 lg:w-1/2 p-8 bg-gray-800 text-white font-sans">
        <h1 className="text-center text-3xl font-extrabold mb-6">Subscribe Entertainment_And_Info Youtube Channel</h1>
        <div className="flex justify-center mb-6">
        <Link href="https://www.youtube.com/@Entertainment_And_Info/?sub_confirmation=1" target="_blank">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mr-4">
            Subscribe Here !
          </button>
        </Link>
          <ShareButton />
        </div>
        <h1 className="text-center text-2xl font-semibold italic">"Informing & Entertaining, One Short at a Time."</h1>
      </div>

      <Footer />
    </div>
  );
}

const ShareButton = () => {
  
  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText('https://www.youtube.com/@Entertainment_And_Info/?sub_confirmation=1');
      toast.success("Link copied!");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      className="bg-green-600 hover:bg-green-700 hover:cursor-pointer text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      onClick={handleShareClick}
    >
            Share ➦
          </button>
  );
}
