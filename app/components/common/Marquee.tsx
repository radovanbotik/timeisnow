"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const container = useRef<HTMLElement | any>();
  const tracks = useRef<HTMLElement | any>();

  const text1 = useRef<HTMLElement | any>();
  const text2 = useRef<HTMLElement | any>();
  let xPercent = 0;
  let direction = -1;

  function animate() {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(text1.current, { xPercent: xPercent });
    gsap.set(text2.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative my-20 h-full w-full" ref={container}>
      <div
        ref={tracks}
        className="text-stroke break relative flex flex-nowrap items-center overflow-hidden text-white"
      >
        <p
          className={`//font-drukText font-drukCondensed lg:text-10xl w-full whitespace-nowrap break-keep text-center text-6xl uppercase`}
          ref={text1}
        >
          - TIME - IS - NOW -
        </p>
        <p
          className={`//font-drukText font-drukCondensed lg:text-10xl absolute left-full top-0 w-full whitespace-nowrap break-keep text-center text-6xl uppercase`}
          ref={text2}
        >
          - TIME - IS - NOW -
        </p>
      </div>
    </div>
  );
}
