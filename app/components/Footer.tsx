import Image from "next/image";
import { Container } from "./Container";
import logo from "../../public/assets/logo/logolight150.png";
import Bandcamp from "@/public/assets/svg/Bandcamp";
import Beatport from "@/public/assets/svg/Beatport";
import Discogs from "@/public/assets/svg/Discogs";
import Instagram from "@/public/assets/svg/Instagram";
import Soundcloud from "@/public/assets/svg/Soundcloud";
import Spotify from "@/public/assets/svg/Spotify";

function SocialLinks() {
  return (
    <ul className="mb-0 flex space-x-6">
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

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="pt-16 text-black sm:pt-24 lg:pt-32"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="//xl:grid //xl:grid-cols-3 //xl:gap-8">
          <div className="//items-end flex flex-col items-center justify-between sm:flex-row">
            <span className="mb-5 inline-block font-drukCondensed text-12xl text-8xl italic leading-[0.8] sm:mb-0 md:text-10xl">
              TIME IS NOW
            </span>

            <div className="lg:self-end">
              {/* <Image alt="Company name" src={logo} className="mb-8" /> */}
              <p className="text-sm leading-6 text-black">
                <span className="block">
                  Bristol based independent record label by shallnotfade
                </span>
                <span className="block">
                  Breakthrough Label winner @ DJ Mag Awards 2022
                </span>
              </p>

              <div className="flex space-x-6">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        {/* COPYRIGHT */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-center text-xs leading-5 text-gray-500 sm:text-start">
            &copy; 2024 Time Is Now, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
