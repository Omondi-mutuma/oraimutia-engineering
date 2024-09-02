import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Cover } from "./ui/cover";
import { Button, MovingBorder } from "./ui/moving-border";
import CTA from "./CTA";
import { ArrowBigDown } from "lucide-react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { GlareCard } from "./ui/glare-card";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import CardDemo from "./blocks/cards-demo-1";
import CardDemo2 from "./blocks/cards-demo-2";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col h-full gap-6 w-full justify-center">
          <div className="w-full flex">
            <Button
              borderRadius="1.75rem"
              className="bg-secondary-foreground px-4 py-2 border-secondary-foreground"
            >
              Latest: Kenya&apos;s president launches SA.I.C in Kirinyaga County
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[48px] leading-[48px] font-medium md:text-[64px] md:leading-[62px] lg:font-bold text-slate-900">
              Building Kenya&apos;s Future, One Innovation at a Time
            </h1>
            <p className="text-base text-slate-800 md:leading-[20px]">
              Engineering excellence for sustainable development across the
              nation and leading the way in creating cutting-edge solutions for
              today and tomorrow.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <CTA
              name="Learn more"
              label="learn more"
              type="button"
              variant="btn-filled"
            />
            <CTA
              name="video"
              type="button"
              label="watch video"
              variant="btn-default-with-border"
              icon={IoArrowForwardCircleOutline}
            />
          </div>
        </div>

        <div className="lg:grid hidden lg:grid-cols-2 w-full h-full gap-3 my-auto">
          <WobbleCard containerClassName="col-span-2 w-full bg-yellow-800">
            <div className="max-w-xs ">
              <h2 className="text-base md:text-xl text-gray-50">Civil works</h2>
              <p className="flex flex-col justify-between text-base/6 text-gray-50">
                Timely, within budget, quality and safety.
              </p>
            </div>
            <Image
              src="/civil.png"
              alt=""
              width={600}
              height={1067}
              className="absolute -bottom-[300px] left-0 -z-40 blur-lg"
            />
          </WobbleCard>
          <CardDemo2></CardDemo2>
          <CardDemo></CardDemo>
        </div>
      </div>
    </section>
  );
};

export default Hero;
