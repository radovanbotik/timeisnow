import { sanityFetch } from "./sanity/client";
import ReverseScrollingColumns from "./components/ReverseScrollingColumns";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import LatestReleases from "./components/LatestReleases";
import Spacer from "./components/Spacer";
import News from "./components/News";
import HeroSection from "./components/HeroSection";

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
  date: null | string;
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

  const videoUrl =
    "https://delivery.twentythree.com/9891396/57423095/video_hd?uuid=02a3fa46-7f98-0c5c-b909-a51a88a58f58&revision=2&domain=bandcamp.23video.com&Expires=1720126800&Signature=0N%7esPlqm8%2dlrVo8At1sT9kHanVC4EpJ8QnKJtAJiZP%7exx%2dEmhq5GSvjKGyDO7GCp8h6AU7wgo%7ec%7eNUe81NOvVAGA48trdIImdUnL2UcI%7e%2dtzmbXCVNechumPzrsoCVJcRcR6Ww8G1P7wMIRd9PL8O%2dHvyhwbXFuuHPtLucaERe%7ec5YgpgzzcsrkAR8rsSjsutyjN9VRvsKDAAovFoF92DtoU%7e64FCkZhCh5p4fxNaaZI4%2dckXXRYeLQF4mdUE2tGJpRc99wTgqO7YgII3dD6n82OeWdK3DqsfO6o06u0YjLf3V%2dFzX2PV%7eFmLie%7eEoD%2dbRcJXO8ekb2aqewUiJi4yg%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB";

  return (
    <div>
      {/* <Hero /> */}
      <HeroSection />
      <LatestReleases />
      <Spacer />
      <News />
      {/* <ReverseScrollingColumns data={releases} /> */}
    </div>
  );
}
