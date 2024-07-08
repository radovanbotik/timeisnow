import { sanityFetch } from "./sanity/client";
import MerchSection from "./components/MerchSection";
import Spacer from "./components/Spacer";
import News from "./components/News";
import HeroSection from "./components/HeroSection";
import image from "../public/assets/images/prozak500.png";
import { Container } from "./components/Container";
import Image from "next/image";
import { post1 } from "./components/dummy";
import Marquee from "./components/Marquee";

export type ReleaseProps = {
  artist: {
    artistName: string;
    slug: {
      current: string;
      _type: "slug";
      image: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
    };
    image: object;
  }[];
  title: string;
  slug: { current: string; _type: string };
  date: string;
  style: string[];
  format: string;
  _id: string;
  catno: string;
  genre: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

export default async function Page() {
  const QUERY = `*[_type=='release']{_id,title,slug,catno,date,genre,style,image,format,artist[]->{
    artistName,slug,image
  }}|order(date desc)`;

  const releases = (await sanityFetch({
    query: QUERY,
  })) as ReleaseProps[];

  return (
    <div className="relative isolate">
      <div className="fixed inset-0 left-0 top-20 -z-10 flex h-full w-full justify-center">
        <div className="mx-auto h-full w-full max-w-7xl border-l border-l-black"></div>
      </div>

      <HeroSection data={releases.slice(0, 4)} />
      {/* <Marquee /> */}
      <Spacer>
        <Container size="lg" className="h-full w-full">
          <div className="relative isolate flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 -z-10 origin-top-left scale-[1.5] blur-[6px] brightness-[0.6]">
              <Image
                src={
                  post1.image.imageUrl
                  // urlFor(image)?.url() || "https://via.placeholder.com/550x310"
                }
                alt={post1.title}
                fill
                className="pointer-events-none object-cover"
              />
              <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800/10 to-transparent"></div>
              <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-gray-800/30 to-transparent"></div>
            </div>
            <h2 className="text-center font-druk text-white">
              <span className="">bubblers</span>
              <span className="mx-2">by</span>
              <span>eli murphy</span>
            </h2>
          </div>
        </Container>
      </Spacer>
      <News realdata={releases} />

      {/* <Spacer className="border-b border-black">
        <Container size="md" className="">
          <div className="relative flex h-full w-full items-center justify-center lg:justify-start">
            <div className="max-w-3xl">
              <h1
                className="font-drukCondensed italic text-transparent"
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "black",
                  textShadow: "2px 2px black",
                }}
              >
                Bristol based independent record label by shallnotfade
              </h1>
              <h2
                className="font-drukCondensed italic text-gray-200"
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "black",
                  textShadow: "2px 2px black",
                }}
              >
                - Breakthrough Label winner at DJ Mag Awards 2022
              </h2>
            </div>
            <div className="absolute bottom-0 right-0 aspect-[1/2] w-36 overflow-hidden sm:w-44 md:w-44 lg:w-48 xl:w-52">
              <Image
                fill
                src={image}
                alt={"pill"}
                className="translate-y-1/4 object-contain"
              />
            </div>
          </div>
        </Container>
      </Spacer> */}

      {/* <News realdata={releases} /> */}

      <MerchSection />
    </div>
  );
}
