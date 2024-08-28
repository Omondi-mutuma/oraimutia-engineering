import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex-col items-center justify-between overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
