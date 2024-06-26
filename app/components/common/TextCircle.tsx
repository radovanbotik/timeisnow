"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { drukWide, helvetica, itcMachine, youth } from "@/app/lib/fonts";
// @ts-ignore
import CircleType from "circletype";

gsap.registerPlugin(useGSAP);

export default function TextCircle() {
  const container = useRef<HTMLElement | any>();
  const circle = useRef<HTMLElement | any>();

  const rawText = "time - is - now - time - is - now - time - is - now - ";

  useEffect(() => {
    new CircleType(circle.current);
    // gsap.to(container.current, {
    //   rotate: 360,
    //   repeat: -1,
    //   duration: 10,
    //   ease: "none",
    // });
  }, []);

  return (
    <div
      ref={container}
      className="fixed bottom-16 right-44 z-10 rounded-full font-drukText uppercase"
    >
      <div
        ref={circle}
        className="inset relative flex items-center justify-center text-2xl"
      >
        {rawText}
      </div>
    </div>
  );
}
