"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { drukWide } from "@/app/lib/fonts";
import "../../../public/assets/images/shallnotfade.jpg";
import Image from "next/image";

import Button from "../common/Button";
import { articles as source } from "@/app/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function SplitScreen() {
  const [isMobile, setIsMobile] = useState(false);
  const container = useRef<HTMLElement | any>();
  const columnLeft = useRef<HTMLElement | any>();
  const columnRight = useRef<HTMLElement | any>();

  let articles = source.slice(0, 3);

  useGSAP(
    () => {
      const reviews = gsap.utils.toArray(".review").slice(1) as HTMLElement[];
      const images = gsap.utils.toArray(".photo").slice(1) as HTMLElement[];
      const imagesAll = gsap.utils.toArray(".photo") as HTMLElement[];

      gsap.set(images, { yPercent: 101 });

      let mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        // this setup code only runs when viewport is at least 640px wide
        setIsMobile(false);
        ScrollTrigger.create({
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          pin: columnRight.current,
        });

        reviews.forEach((review, index) => {
          let headline = review.querySelector(".title");
          let animation = gsap
            .timeline()
            .to(images[index], { yPercent: 0 })
            .set(imagesAll[index], { autoAlpha: 0 });
          ScrollTrigger.create({
            trigger: headline,
            start: "top 50%",
            end: "top 50%",
            animation: animation,
            scrub: 2,
            markers: false,
          });
        });

        return () => {
          console.log("mobile");
          setIsMobile(true);
        };
      });
    },
    { scope: container },
  );

  return (
    <>
      <div className="flex" ref={container}>
        <div
          className="hidden h-full w-1/2 flex-col gap-8 md:flex"
          ref={columnLeft}
        >
          {articles.map((article) => (
            <div className="review mx-4 flex flex-col gap-4" key={article.id}>
              <h3 className="title">{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
        <div
          className="top-16 hidden h-full w-1/2 flex-col items-center justify-center gap-8 md:flex"
          ref={columnRight}
        >
          <div className="relative flex aspect-square h-full w-full flex-col gap-8 overflow-hidden">
            {articles.map((article) => (
              <div
                className="photo absolute inset-0 left-0 top-0 max-w-lg rounded-sm border"
                key={article.id}
              >
                <a href={"/"} aria-hidden={true}>
                  <Image
                    src={article.imageUrl}
                    alt={`Image of ${article.title}`}
                    sizes="(max-width: 512px) 320px, 512px"
                    fill
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:hidden">
        {articles.map((article) => (
          <div className="group hover:bg-white/10" key={article.id}>
            <div className="flex h-full flex-col gap-8 pl-8">
              <div className="h-full w-full">
                <div className="relative aspect-square rounded-sm border sm:aspect-video">
                  <a href={article.href} aria-hidden={true}>
                    <Image
                      src={article.imageUrl}
                      alt={`Image of ${article.title}`}
                      sizes="(max-width: 512px) 320px, 512px"
                      fill
                      className="object-cover"
                    />
                  </a>
                </div>
              </div>
              <div className="relative flex h-full flex-col gap-4">
                <h2 className="w-fit">
                  <a
                    href={article.href}
                    className="w-fit after:absolute after:inset-0"
                    aria-label={article.title}
                  >
                    {article.title}
                  </a>
                </h2>
                <p className="line-clamp-6">{article.subtitle}</p>
                <div className="">
                  <h6>
                    <span className="uppercase">Shop</span>
                    <span className="mx-2">|</span>
                    <span className="uppercase">Read</span>
                    <span className="mx-2">&#x2022;</span>
                    <span>{article.date}</span>
                  </h6>
                </div>
                <Button className="w-full">CHECK</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
