"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { drukWide } from "@/app/lib/fonts";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedMarquee() {
  const container = useRef<HTMLElement | any>();
  const track = useRef<HTMLElement | any>();
  const firstElement = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    // + firstElement.current?.offsetLeft;
    () => {
      function getScrollAmount() {
        let trackWidth = track.current.scrollWidth;
        return -(trackWidth - window.innerWidth);
      }

      const tween = gsap.to(track.current, {
        color: "black",
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    },
    { scope: container },
  );

  return (
    <div className="text-stroke relative isolate py-5 text-center font-druk text-12xl uppercase text-white">
      <div ref={container} className="relative overflow-x-hidden">
        <div ref={track} className="flex flex-nowrap">
          <span className="w-full shrink-0 uppercase" ref={firstElement}>
            - Leave the past -
          </span>
          <span className={`w-full shrink-0 uppercase`}>- time is now -</span>
        </div>
      </div>
      {/* <div className="absolute inset-0 -z-10 flex flex-wrap gap-8 text-9xl blur-sm">
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
        <p className="font-druk leading-[0] text-black">sick fam init</p>
      </div> */}
    </div>
  );
}
