"use client"
import Image from "next/image";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Top from "./_components/Top";

export default function Home() {
  return (
    <div>
      <Top/>
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

    <Footer/>
    </div>

  );
}
