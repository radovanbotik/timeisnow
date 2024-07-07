"use client";
import Image from "next/image";
import { Container } from "./Container";
import { useEffect, useRef, useState } from "react";

const releases = [
  {
    _id: 1,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 2,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 3,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 4,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 5,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 6,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 7,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 8,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 9,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
  {
    _id: 10,
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/3d748949-1fa8-415f-88b2-b45f89f632f9.jpg",
  },
];

export default function UpcomingReleases() {
  const [mousedownX, setMousedownX] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const track = useRef(null);

  useEffect(() => {}, []);

  return (
    <section>
      <Container>
        <div
          onMouseDown={(e) => {
            console.log(e.clientX);
            setMousedownX((prev) => e.clientX);
          }}
          onMouseMove={(e) => {
            if (mousedownX === 0) return;
            const mouseDelta = mousedownX - e.clientX;
            const maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = prevPercentage + percentage;
            const nextPercentage = Math.max(
              Math.min(nextPercentageUnconstrained, 0),
              -100,
            );
            setPercentage(nextPercentage);
            track.current?.animate(
              {
                transform: `translateX(${nextPercentage}%)`,
              },
              { duration: 1000, fill: "forwards" },
            );

            for (const image of track.current.getElementsByClassName("image")) {
              image.animate(
                {
                  objectPosition: `${100 + nextPercentage}% center`,
                },
                { duration: 1200, fill: "forwards" },
              );
            }
          }}
          onMouseUp={(e) => {
            setMousedownX(0);
            setPrevPercentage((prev) => percentage);
          }}
          onMouseLeave={(e) => {
            setMousedownX(0);
            setPrevPercentage((prev) => percentage);
          }}
          className="cursor-grab overflow-hidden"
        >
          <ul className="flex w-full gap-10" ref={track}>
            {releases.map((r, i) => (
              <li key={r._id} className="shrink-0" draggable={false}>
                <div className="relative aspect-[2/3] w-72 select-none lg:w-80">
                  <Image
                    src={r.image}
                    fill
                    alt="doesntmatter"
                    className="image select-none object-cover"
                    draggable={false}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
