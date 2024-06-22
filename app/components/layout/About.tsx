"use client";
import Image from "next/image";
import TextCircle from "../common/TextCircle";
import prozak250 from "../../../public/assets/images/prozak250.png";
import shallnotfade from "../../../public/assets/images/shallnotfade.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { drukWide, itcMachine } from "@/app/lib/fonts";

export default function About() {
  const image = useRef<HTMLElement | any>();
  const mask = useRef<HTMLElement | any>();
  const imageRevealTl = useRef<GSAPTimeline | any>();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(image.current, { scale: 2 });
      tl.to(
        mask.current,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        0,
      );
      tl.to(mask.current, { scale: 0.95 });
    },
    {
      scope: mask,
    },
  );

  return (
    <>
      <div className="isolate flex flex-col">
        <h2>Wagwan my g!</h2>
        <div className="flex flex-col gap-10 md:flex-row">
          {/* <TextCircle /> */}
          <div className="h-full basis-full lg:basis-2/3">
            <div
              className="clip-30 relative aspect-square max-w-md bg-black sm:max-w-lg"
              ref={mask}
            >
              <Image
                src={shallnotfade}
                alt="about"
                fill
                className="h-full w-full"
                ref={image}
              />
            </div>
          </div>
          <div className="h-hull basis-full lg:basis-1/3">
            <h3 className={`${drukWide.className}`}>the mission</h3>
            <p>
              TIME IS NOW is a sublabel of Time has changed. But rather than
              considering it as a sublabel. TIME IS NOW is especially a new
              platform for other artists. The style is a bit different and
              oscillates between House - tech house and techno.
            </p>
          </div>
        </div>
        <Image
          src={prozak250}
          alt="graphik"
          width={250}
          height={433}
          sizes="125px, (max-width: 512px) 250px"
          className="absolute -bottom-20 right-0 z-10 w-[125px] translate-y-1/2 md:bottom-0 md:w-[250px]"
        />
      </div>
    </>
  );
}
