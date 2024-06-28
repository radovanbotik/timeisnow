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
      <div className="flex h-screen w-full flex-col bg-pink-300">
        {/* TOP */}
        <div className="navigation-top h-5">top</div>

        {/* BODY */}
        <div className="body relative isolate flex h-full w-full justify-around gap-5 p-1">
          <div className="column-left h-full w-4/6 gap-5 bg-pink-600">
            <div className="flex h-full w-full items-end justify-between gap-5 bg-pink-800 px-5">
              <div className="flex h-full w-full flex-col justify-between">
                <h2 className="text-center">CHOOSE YOUR WARRIOR</h2>
                <div className="//flex grid h-1/3 w-full grid-cols-3 grid-rows-2 gap-1">
                  <div className="relative w-full rounded-xl border-2 bg-blue-400">
                    <Image
                      fill
                      src={yosh}
                      alt="rosh"
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="relative w-full rounded-xl border-2 bg-blue-400">
                    <Image
                      fill
                      src={soulmasstransitsystem}
                      alt="soulmasstransitsystem"
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="relative w-full rounded-xl border-2 bg-blue-400">
                    <Image
                      src={yuqt}
                      alt="yuqt"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="relative w-full rounded-xl border-2 bg-blue-400">
                    <Image
                      src={groovy}
                      alt="groovy"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                  <div className="relative w-full rounded-xl border-2 bg-blue-400">
                    <Image
                      src={djcrisps}
                      alt="djcrisps"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>

              <div className="relative h-full w-full basis-full bg-blue-300">
                <Image
                  src={bakey}
                  alt="bakey"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="column-right h-full w-2/6 bg-pink-600">
            <div className="flex h-full flex-col justify-between space-y-5 bg-pink-800 px-5">
              <h3 className="mb-0 pb-0">producer name</h3>
              <h6>something beneath</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                architecto optio, dicta laborum, delectus praesentium animi nemo
                omnis magnam possimus perferendis officiis illum libero
                perspiciatis, aperiam ullam rerum. Culpa, eum sed animi quas
                delectus sapiente.
              </p>

              <div>
                <p>line1</p>
                <p>line2</p>
                <p>line3</p>
                <p>line4</p>
                <p>line5</p>
              </div>

              <div className="flex gap-5">
                <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
                <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
                <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
                <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
              </div>
              <button className="border-2 border-black">select</button>
            </div>
          </div>
        </div>
        {/* BODY */}

        {/* BOTTOM */}
        {/* <div className="navigation-bottom flex h-5 justify-center">
          <button>select</button>
        </div> */}
      </div>
    </Container>
  );
}
