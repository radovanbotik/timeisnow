import Bandcamp from "@/public/assets/svg/Bandcamp";
import Beatport from "@/public/assets/svg/Beatport";
import Discogs from "@/public/assets/svg/Discogs";
import Instagram from "@/public/assets/svg/Instagram";
import Soundcloud from "@/public/assets/svg/Soundcloud";
import Spotify from "@/public/assets/svg/Spotify";

function SocialLinks() {
  return (
    <div className="static right-0 top-28 mr-0 flex flex-row gap-5 lg:absolute lg:mr-20 lg:flex-col">
      <div className="h-5 w-5">
        <Instagram />
      </div>
      <div className="h-5 w-5">
        <Spotify />
      </div>
      <div className="h-5 w-5">
        <Beatport />
      </div>
      <div className="h-5 w-5">
        <Bandcamp />
      </div>
      <div className="h-5 w-5">
        <Discogs />
      </div>
      <div className="h-5 w-5">
        <Soundcloud />
      </div>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="//bg-black/20 fixed top-0 z-50 h-20 w-full backdrop-blur-sm lg:backdrop-blur-none">
      <div className="box relative h-full w-full">
        <SocialLinks />
      </div>
    </div>
  );
}
