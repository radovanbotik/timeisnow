"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { drukWide } from "@/app/lib/fonts";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

export default function ProgressBar() {
  const container = useRef<HTMLElement | any>();
  const amount = useRef<HTMLElement | any>();

  // useGSAP(
  //     () => {
  //       function getScrollAmount() {
  //         let trackWidth = track.current.scrollWidth;
  //         return -(trackWidth - window.innerWidth);
  //       }

  //       const tween = gsap.to(track.current, {
  //         color: "black",
  //         x: getScrollAmount,
  //         duration: 3,
  //         ease: "none",
  //       });

  //       ScrollTrigger.create({
  //         trigger: container.current,
  //         start: "top 20%",
  //         end: () => `+=${getScrollAmount() * -1}`,
  //         pin: true,
  //         animation: tween,
  //         scrub: 1,
  //         invalidateOnRefresh: true,
  //       });
  //     },
  //     { scope: container },
  //   );

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box") as HTMLElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "+=800", // pin for 800 pixels worth of scroll
          scrub: true,
          pin: true,
        },
      });

      boxes.forEach((box, i) => {
        tl.from(box, {
          visibility: "hidden",
          duration: 0.01, // just a tiny amount of duration so it's like a toggle since visibility isn't really animatable.
          stagger: 0.5, // stagger the starting time of each subsequent reveal
        });
      });

      //   // create a proxy object so we can tween the numeric value and plug it into the amount element's innerText using an onUpdate()
      //   let amountProxy = { value: 0 };
      //   let amountEl = document.querySelector(".amount");

      //   tl.to(
      //     amountProxy,
      //     {
      //       value: 800,
      //       onUpdate: () =>
      //         (amount.current.innerText =
      //           "$" + formatNumber(amountProxy.value, 2)),
      //       duration: tl.duration(), // just match however long the entire timeline is at this point (it's only populated with the visibility toggles, so it'll stretch to fit those exactly)
      //       ease: "none",
      //     },
      //     0,
      //   ); // <- position parameter places it at the very start of the timeline, so it overlaps with the toggling visibility stuff.

      //   // a helper function for formatting a number - it adds commas and forces a certain number of decimal places.
      //   function formatNumber(value, decimals) {
      //     let s = (+value).toLocaleString("en-US").split(".");
      //     return decimals
      //       ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
      //       : s[0];
      //   }
    },
    { scope: container.current },
  );

  return (
    <div className="flex h-screen flex-col items-center" ref={container}>
      {/* <SpeakerWaveIcon className="mb-10 h-60 w-60" /> */}
      <h3 className="text-center">Loading more Interstellar content..</h3>
      <div className="bar mx-auto flex h-24 w-3/4 gap-2 border-4 border-black p-2">
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
        <div className="box flex-1 bg-violet-700"></div>
      </div>
      {/* <div className="amount mt-4 text-center" ref={amount}>
        $0.00
      </div> */}
    </div>
  );
}
