import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "./ui/moving-border";
import { SkeletonProps } from "@/types/index.t";

export function BentoGridSecondDemo() {
  return (
    <section className="container">
      <Button
        borderRadius="1.75rem"
        className="bg-secondary-foreground border-secondary-foreground p-4"
      >
        <p className="lg:-rotate-90 w-full text-3xl font-bold tracking-wider">
          Services
        </p>
      </Button>
      <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <Skeleton
                image={item.image}
                width={item.width}
                height={item.height}
              />
            }
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = ({ image, width, height }: SkeletonProps) => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"
    style={{ width, height }} // Apply width and height here
  >
    <Image
      src={image}
      alt="Background Image"
      width={width}
      height={height}
      className="object-cover w-full h-full rounded-xl"
    />
  </div>
);

const items = [
  {
    title: "Earth movers and groundworks",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image:
      "https://images.unsplash.com/photo-1678512691253-9ec1c66efa1f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image path
    width: "6776", // Custom width
    height: "4500", // Custom height
  },
  {
    title: "Borehole drilling",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image: "/shot-2.webp", // Image path
    width: "448", // Custom width
    height: "612", // Custom height
  },
  {
    title: "Community water projects",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image:
      "https://plus.unsplash.com/premium_photo-1675624629079-e4bc75b079ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image path
    width: "350", // Custom width
    height: "300", // Custom height
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our company.",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    image:
      "https://images.unsplash.com/photo-1628709518251-47c3c6878b5d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image path
    width: "500", // Custom width
    height: "400", // Custom height
  },
];

export default BentoGridSecondDemo;
