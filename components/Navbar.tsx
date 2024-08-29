"use client";
import { NAVLINKS } from "@/constants/index.c";
import Image from "next/image";
import Button from "./CTA";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".motionButton", {
      x: 100,
    });
    gsap.from(".logo", {
      x: -100,
    });
    gsap.from(".navLink", {
      y: -100,
      stagger: {
        each: 0.1,
        from: "start",
      },
    });
  }, []);

  return (
    <header className="absolute top-0 left-0 z-20 w-full flex justify-between items-center  h-16  ring-1 ring-white/10 bg-neutral-50 dark:bg-neutral-800 py-1.5 px-4">
      <Image
        src="/logo.png"
        alt="logo"
        width={77}
        height={29}
        className="logo"
      />
      <nav className="hidden justify-between items-center p-4 md:flex">
        <ul className="w-full flex justify-center items-center gap-4">
          {NAVLINKS.map((link, index) => (
            <li key={index} className="navLink">
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="motionButton">
        <Button
          name="btnGetStarted"
          label="Get started"
          type="button"
          variant="btn-default"
          icon={IoArrowForwardCircleOutline}
        />
      </div>
    </header>
  );
};

export default Navbar;
