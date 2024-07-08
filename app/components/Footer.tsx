import Image from "next/image";
import { Container } from "./Container";
import logo from "../../public/assets/logo/logolight150.png";
import Bandcamp from "@/public/assets/svg/Bandcamp";
import Beatport from "@/public/assets/svg/Beatport";
import Discogs from "@/public/assets/svg/Discogs";
import Instagram from "@/public/assets/svg/Instagram";
import Soundcloud from "@/public/assets/svg/Soundcloud";
import Spotify from "@/public/assets/svg/Spotify";

const navigation = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function SocialLinks() {
  return (
    <ul className="flex space-x-6">
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

            <div className="//self-end">
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
                {/* {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-black hover:text-black/70"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="h-6 w-6" />
                  </a>
                ))} */}
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
