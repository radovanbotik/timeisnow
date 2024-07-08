"use client";
import Bandcamp from "@/public/assets/svg/Bandcamp";
import Beatport from "@/public/assets/svg/Beatport";
import Discogs from "@/public/assets/svg/Discogs";
import Instagram from "@/public/assets/svg/Instagram";
import Soundcloud from "@/public/assets/svg/Soundcloud";
import Spotify from "@/public/assets/svg/Spotify";
import { Container } from "./Container";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import logo from "../../public/assets/logo/logolight150.png";
import Image from "next/image";

function SocialLinks() {
  return (
    <ul className="//lg:absolute //lg:flex-col //mr-10 //right-0 /hidden static top-28 m-0 mx-auto flex-row items-center justify-center gap-5 pr-1.5 sm:flex">
      <li>
        <a
          href="https://www.instagram.com/timeisnowbristol/"
          className="inline-flex h-5 w-5 items-center justify-center"
          aria-label="Time is now on Instagram"
          title="Time is now on Instagram"
          target="_blank"
        >
          <Instagram className="text-gray-800" />
        </a>
      </li>
      <li>
        <a
          href="https://open.spotify.com/user/1evdlrdvh69emi4mhzjn2d41d?si=WIPD4y-NT5-Gbs60IpXG1A&nd=1&dlsi=9183607e4cd64989"
          className="inline-flex h-5 w-5 items-center justify-center"
          aria-label="Time is now on Spotify"
          title="Time is now on Spotify"
          target="_blank"
        >
          <Spotify className="text-gray-800" />
        </a>
      </li>
      <li>
        <a
          href="https://www.beatport.com/label/time-is-now-records/83657"
          className="inline-flex h-5 w-5 items-center justify-center"
          aria-label="Time is now on Beatport"
          title="Time is now on Beatport"
          target="_blank"
        >
          <Beatport className="text-gray-800" />
        </a>
      </li>
      <li>
        <a
          href="https://shallnotfade.bandcamp.com/subscribe"
          className="inline-flex h-5 w-5 items-center justify-center"
          aria-label="Time is now on Bandcamp"
          title="Time is now on Bandcamp"
          target="_blank"
        >
          <Bandcamp className="text-gray-800" />
        </a>
      </li>
      <li>
        <a
          href="https://www.discogs.com/label/1739622-Timeisnow?page=1"
          className="inline-flex h-5 w-5 items-center justify-center"
          aria-label="Time is now on Discogs"
          title="Time is now on Discogs"
          target="_blank"
        >
          <Discogs className="text-gray-800" />
        </a>
      </li>
      <li>
        <a
          href="https://soundcloud.com/shallnotfade"
          className="inline-flex h-5 w-5 items-center justify-center"
          aria-label="Time is now on Soundcloud"
          title="Time is now on Soundcloud"
          target="_blank"
        >
          <Soundcloud className="text-gray-800" />
        </a>
      </li>
    </ul>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 h-20 w-full backdrop-blur-sm lg:backdrop-blur-sm">
      <nav
        aria-label="Global"
        className="box relative flex h-full w-full items-center"
      >
        <Container className="relative w-full">
          <div className="flex items-center justify-between">
            <div className="//lg:flex-1 flex">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">TIME IS NOW</span>
                <span className="font-drukCondensed text-3xl italic text-gray-800">
                  TIME IS NOW
                </span>
                {/* <Image
                  alt="Time is now bristol"
                  src={logo}
                  className="h-8 w-auto"
                /> */}
              </Link>
            </div>
            {/* <SocialLinks /> */}
            <div className="flex">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="ml-auto inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
              >
                <span className="sr-only">Open main menu</span>
                <Bars2Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
