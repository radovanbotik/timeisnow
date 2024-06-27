import Image from "next/image";
import bakey from "../../../public/assets/artists/bakey.png";
import djcrisps from "../../../public/assets/artists/djcrisps.png";
import groovy from "../../../public/assets/artists/groovy.png";
import interplanetarycriminal from "../../../public/assets/artists/interplanetarycriminal.png";
import mainphase from "../../../public/assets/artists/mainphase.png";
import soulmasstransitsystem from "../../../public/assets/artists/soulmasstransitsystem.png";
import yosh from "../../../public/assets/artists/yosh.png";
import yuqt from "../../../public/assets/artists/yuqt.png";
import { cn } from "@/app/lib/helpers";
import { Container } from "./Container";

const artists = [
  {
    id: 1,
    artist: "bakey",
    imageUrl: bakey,
  },
  {
    id: 2,
    artist: "djcrisps",
    imageUrl: djcrisps,
  },
  {
    id: 3,
    artist: "groovy",
    imageUrl: groovy,
  },
  {
    id: 4,
    artist: "interplanetarycriminal",
    imageUrl: interplanetarycriminal,
  },
  {
    id: 5,
    artist: "mainphase",
    imageUrl: mainphase,
  },
  {
    id: 6,
    artist: "soulmasstransitsystem",
    imageUrl: soulmasstransitsystem,
  },
  //   {
  //     id: 7,
  //     artist: "yosh",
  //     imageUrl: yosh,
  //   },
  //   {
  //     id: 8,
  //     artist: "yuqt",
  //     imageUrl: yuqt,
  //   },
];

{
  /* <div className="h-[700px] w-96">
  <Image
    src={interplanetarycriminal}
    alt="intrplanetarycriminal"
    className="object-cover"
  />
</div>
<div className="h-[700px] w-96">
  <Image src={mainphase} alt="mainphase" className="object-cover" />
</div>
<div className="h-[700px] w-96">
  <Image
    src={soulmasstransitsystem}
    alt="soulmasstransitsystem"
    className="object-cover"
  />
</div>
<div className="h-[700px] w-96">
  <Image src={yosh} alt="rosh" className="object-cover" />
</div>
<div className="h-[700px] w-96">
  <Image src={yuqt} alt="yuqt" className="object-cover" />
</div>
<div className="h-[700px] w-96">
  <Image src={groovy} alt="groovy" className="object-cover" />
</div>
<div className="h-[700px] w-96">
  <Image src={djcrisps} alt="djcrisps" className="object-cover" />
</div>
<div className="h-[700px] w-96">
  <Image src={bakey} alt="bakey" className="object-cover" />
</div> */
}

// const character30 =

export default function ChooseHero() {
  return (
    <Container>
      <div className="flex">
        <div className="relative flex h-[700px] w-2/3">
          {artists.slice(0, 5).map((artist, i, arr) => (
            <div
              key={artist.id}
              className={cn(
                "relative flex h-full w-full content-end items-end",
                i === 0 && "translate-x-[200px]",
                i === 1 && "translate-x-[300px]",
                i === 2 && "translate-x-[400px]",
                i === 3 && "translate-x-[500px]",
                i === 4 && "translate-x-[600px]",
              )}
            >
              <div
                className={cn(
                  // "h-[700px] w-[450px]",
                  "absolute bottom-0 h-[700px] w-[450px]",
                  i === 0 && "scale-[30%]",
                  i === 1 && "scale-[40%]",
                  i === 2 && "scale-[50%]",
                  i === 3 && "scale-[60%]",
                  i === 4 && "scale-[70%]",
                  // i === 5 && "left-[50%] h-[100%]",
                )}
              >
                <Image
                  src={artist.imageUrl}
                  fill
                  alt={`this is ${artist.artist}`}
                  className={cn("left-0 object-cover")}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3">
          <div className="relative flex h-[700px] w-[450px]">
            <Image
              src={artists[artists.length - 1].imageUrl}
              alt={artists[artists.length - 1].artist}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
