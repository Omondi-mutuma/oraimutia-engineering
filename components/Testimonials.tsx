"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Button } from "./ui/moving-border";

export function InfiniteMovingCardsDemo() {
  return (
    <section className="h-full mt-5 rounded-md flex flex-col gap-6 antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="w-full px-8">
        <Button
          borderRadius="1.75rem"
          className="w-full flex justify-center text-center bg-secondary-foreground border-secondary-foreground p-2"
        >
          <h3 className="text-2xl ">Client Testimonials</h3>
        </Button>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="w-full border"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Working with Oraimutia Engineering felt like stepping into a transformative era. Their innovative solutions turned challenges into opportunities. Truly, the best of times!",
    name: "Brian Omondi",
    title: "Teki Technologies",
  },
  {
    quote:
      "Oraimutia Engineering’s commitment to excellence is unquestionable. Choosing them means embracing success—to be, without a doubt!",
    name: "William Wandera",
    title: "Nyandarua community self help group",
  },
  {
    quote:
      "Oraimutia Engineering’s projects are like dreams realized—precision and innovation woven seamlessly. They turn imagination into reality.",
    name: "Edgar Allan Poe",
    title: "Blue Capital",
  },
  {
    quote:
      "In the engineering world, it’s universally acknowledged that Oraimutia delivers excellence. Their solutions are as sought-after as a good fortune!",
    name: "Jane Austen",
    title: "Pride Africa",
  },
  {
    quote:
      "When it comes to navigating complex engineering challenges, call Oraimutia Engineering. They sail through projects with expertise and determination.",
    name: "Herman Melville",
    title: "Moby-Works",
  },
];

export default InfiniteMovingCardsDemo;
