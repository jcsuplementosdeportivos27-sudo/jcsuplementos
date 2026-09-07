"use client";

import { useEffect } from "react";
import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import SocialFloating from "@/components/SocialFloating/SocialFloating";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    console.log("1.0.0");
  }, []);

  return (
    <>
      <Intro />

      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Contact />
        <Footer />
      </main>

      <SocialFloating />
    </>
  );
}
