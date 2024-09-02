"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import CTA from "./CTA";
import { Button } from "./ui/moving-border";

export function WobbleCardDemo() {
  return (
    <section className="container">
      <div className="flex justify-center px-8">
        <Button
          borderRadius="1.75rem"
          duration={20000}
          className=" justify-center text-center bg-white text-slate-800 px-4 py-2"
        >
          <h3 className="text-2xl font-bold">Get in Touch</h3>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 lg:min-h-[600px] xl:min-h-[300px] bg-yellow-500">
          <div className="max-w-lg h-full flex flex-col items-center md:items-start justify-center">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-slate-900">
              Got a Project? Let&apos;s discuss it!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-slate-800">
              With over 100 monthly active clients, Oraimutia is the most
              popular engineering company for contractors and developers.
            </p>
            <div className="mt-6">
              <CTA
                type="submit"
                name="Contact us"
                label="Send us an email: info@oraimutia.co.ke"
                variant="btn-filled"
              />
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="linear demo image"
            className="hidden lg:block absolute -right-10 md:-right-[40%] lg:-right-[1%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
}

export default WobbleCardDemo;
