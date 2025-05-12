"use client"
import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Hero from "../_components/Hero";
import Top from "../_components/Top";

export default function Home() {
  return (
    <>
    <Top/>

    <div className="min-h-screen bg-black text-white">

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold text-center mb-5 text-blue-400 text-shadow-sm">
            Get in Touch
          </h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}


