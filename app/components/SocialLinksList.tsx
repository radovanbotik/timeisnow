import Bandcamp from "@/public/assets/svg/Bandcamp";
import Beatport from "@/public/assets/svg/Beatport";
import Discogs from "@/public/assets/svg/Discogs";
import Instagram from "@/public/assets/svg/Instagram";
import Soundcloud from "@/public/assets/svg/Soundcloud";
import Spotify from "@/public/assets/svg/Spotify";

export default function SocialLinksList() {
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
