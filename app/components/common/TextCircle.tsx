"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { drukWide, helvetica, itcMachine, youth } from "@/app/lib/fonts";

gsap.registerPlugin(useGSAP);

export default function TextCircle() {
  const container = useRef<HTMLElement | any>();
  const circle = useRef<HTMLElement | any>();

  useGSAP(() => {}, { scope: container });

  const rawText = "time - is - now - ";
  const splittext = rawText.split("").map((char, i) => (
    <span
      key={i}
      className="absolute top-0 origin-[0px_64px] text-lg leading-none"
      style={{ transform: `rotate(${i * 20}deg)` }}
    >
      {char}
    </span>
  ));

  return (
    <div
      ref={container}
      className={`${itcMachine.className} fixed right-32 top-32 rounded-full bg-red-500`}
    >
      <div
        ref={circle}
        className="relative flex h-32 w-32 items-center justify-center"
      >
        {splittext}
      </div>
    </div>
  );
}
