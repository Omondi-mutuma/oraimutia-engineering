import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main className="relative min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
