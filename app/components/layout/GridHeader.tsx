"use client";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(Flip);

const squareData = [
  {
    id: 1,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 2,
    src: "https://geo-media.beatport.com/image_size/1400x1400/6840be38-d690-472b-af67-0f32adad0ec7.jpg",
  },
  {
    id: 3,
    src: "https://geo-media.beatport.com/image_size/1400x1400/ce4b7d8f-99c0-4075-8b57-c4da48e543a9.jpg",
  },
  {
    id: 4,
    src: "https://geo-media.beatport.com/image_size/250x250/7c153a55-123a-4440-bf1c-f59c9ba73c77.jpg",
  },
  {
    id: 5,
    src: "https://geo-media.beatport.com/image_size/250x250/22ed9910-4b65-4bb2-8299-90abf1b66e06.jpg",
  },
  {
    id: 6,
    src: "https://geo-media.beatport.com/image_size/250x250/00502573-233c-4ad0-bac0-d56cfb12ff16.jpg",
  },
  {
    id: 7,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 8,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 9,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 10,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 11,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 12,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 13,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 14,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 15,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
  {
    id: 16,
    src: "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  },
];

export default function GridHeader() {
  const container = useRef<HTMLElement | any>();
  const list = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      setInterval(() => {
        let allCells = gsap.utils.toArray(".gridli") as HTMLElement[];
        let shuffled = gsap.utils.shuffle(allCells);

        const state = Flip.getState(allCells);
        console.log(state);
        let swap = shuffled.map((cell) => {
          return list.current.appendChild(cell);
        });
        console.log(allCells);

        Flip.from(state, { duration: 2, ease: "power1.inOut" });
      }, 3000);
    },
    {
      scope: container.current,
    },
  );

  return (
    <div className="flex h-[700px] flex-col gap-8 overflow-hidden sm:h-[512px] md:flex-row">
      <div className="flex w-full flex-col gap-4 md:w-1/2">
        <h6>banging bits</h6>
        <h2>Home of the biggest Bangers</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit quae tenetur incidunt eveniet voluptas nihil totam, unde
          animi non exercitationem et fugiat quo cupiditate illum.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <div ref={container} className="flex flex-col overflow-hidden">
          <ul className="grid grid-cols-3 gap-2" ref={list}>
            {squareData.slice(0, 6).map((release, i) => (
              <li
                key={release.id}
                className={`gridli cell relative aspect-square rounded-sm border first:col-span-2 first:row-span-2`}
                data-grid={`cell-${i}`}
              >
                <Image
                  src={release.src}
                  fill
                  alt="bla bla"
                  sizes="(max-width: 512px) 512px"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
