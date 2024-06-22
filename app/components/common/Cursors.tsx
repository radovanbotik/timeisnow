"use client";
import cursor85 from "../../../public/assets/cursor/cursor85.png";
import cursor42 from "../../../public/assets/cursor/cursor42.png";
import cursor21 from "../../../public/assets/cursor/cursor21.png";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  const cursor = useRef<HTMLElement | any>();
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  function captureMouseMovement(e: MouseEvent) {
    const { clientX, clientY } = e;
    // console.log(e);
    mouse.current = {
      x: clientX,
      y: clientY,
    };

    moveCursor(clientX, clientY);
  }

  function moveCursor(x: number, y: number) {
    gsap.set(cursor.current, {
      x: x,
      y: y,
      xPercent: 0,
      yPercent: 0,
    });
  }

  function animate() {
    moveCursor(mouse.current.x, mouse.current.y);
    window.requestAnimationFrame(animate);
  }

  useLayoutEffect(() => {
    animate();
    window.addEventListener("mousemove", captureMouseMovement);
    return () => window.removeEventListener("mousemove", captureMouseMovement);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[999999] h-20 w-20"
      ref={cursor}
    >
      <Image src={cursor85} alt="cursor" width={85} height={87} />
    </div>
  );
}
