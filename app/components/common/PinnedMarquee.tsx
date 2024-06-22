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

  useGSAP(
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
    <div className="text-stroke py-4 text-center text-9xl uppercase text-white">
      <div ref={container}>
        <div ref={track} className="flex flex-nowrap">
          <span className="w-full shrink-0 uppercase">- Leave the past -</span>
          <span className={`w-full shrink-0 uppercase ${drukWide.className}`}>
            time is now
          </span>
        </div>
      </div>
    </div>
  );
}
