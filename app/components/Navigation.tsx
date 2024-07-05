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

function SocialLinks() {
  return (
    <div className="static right-0 top-28 mr-10 hidden flex-row items-center justify-center gap-5 sm:flex lg:absolute lg:flex-col">
      <div className="inline-flex h-5 w-5 items-center justify-center">
        <Instagram />
      </div>
      <div className="inline-flex h-5 w-5 items-center justify-center">
        <Spotify />
      </div>
      <div className="inline-flex h-5 w-5 items-center justify-center">
        <Beatport />
      </div>
      <div className="inline-flex h-5 w-5 items-center justify-center">
        <Bandcamp />
      </div>
      <div className="inline-flex h-5 w-5 items-center justify-center">
        <Discogs />
      </div>
      <div className="inline-flex h-5 w-5 items-center justify-center">
        <Soundcloud />
      </div>
    </div>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="//bg-black/20 fixed top-0 z-50 h-20 w-full backdrop-blur-sm lg:backdrop-blur-none">
      <nav
        aria-label="Global"
        className="box relative flex h-full w-full items-center"
      >
        <Container className="relative w-full">
          <div className="flex justify-between">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">TIME IS NOW</span>
                <h3 className="m-0">TIME IS NOW LABEL</h3>
                {/* <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                /> */}
              </Link>
            </div>
            <SocialLinks />
            <div className="flex">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="ml-auto inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
