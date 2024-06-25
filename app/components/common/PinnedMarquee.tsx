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
    <div className="text-stroke relative isolate py-20 text-center font-druk text-8xl uppercase text-white sm:text-9xl md:text-10xl lg:py-5">
      <div ref={container} className="relative">
        <div ref={track} className="flex flex-nowrap">
          <span className="w-full shrink-0 uppercase" ref={firstElement}>
            - Leave the past -
          </span>
          <span className="w-full shrink-0 uppercase">- time is now -</span>
        </div>
      </div>
    </div>
  );
}
