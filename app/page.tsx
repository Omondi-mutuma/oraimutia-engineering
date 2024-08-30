import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main className="relative min-h-screen flex-col items-center justify-between overflow-hidden">
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
}
