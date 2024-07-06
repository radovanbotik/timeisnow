"use client";

import { ReleaseProps } from "../page";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { urlFor } from "../sanity/helpers";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";

export default function CoverFlowSection({ data }: { data: ReleaseProps[] }) {
  return (
    <section className="bg-black py-10">
      <Container>
        <ul className="whitespace-nowrap">
          {data.map(({ _id, image, title }, i) => (
            <li key={_id}>
              <div className="relative aspect-square w-64 cursor-pointer shadow-xl sm:w-[60vw] sm:max-w-lg lg:w-[440px] xl:w-[16rem]">
                <Image
                  src={
                    urlFor(image)?.url() ||
                    "https://via.placeholder.com/550x310"
                  }
                  alt={title}
                  fill
                  className="pointer-events-none object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
