import Image from "next/image";
import ImageFade from "../common/ImageFade";
import angrypill from "../../../public/assets/images/pill421.png";
import pill from "../../../public/assets/images/prozak250.png";
import { Container } from "../layout/Container";

function Images() {
  return (
    <section className="flex h-full w-full flex-col lg:flex-row">
      {/* <div className="relative basis-full">
        <div className="relative mx-auto aspect-[5/4] max-w-lg overflow-hidden">
          <Image
            src={
              "https://geo-media.beatport.com/image_size/250x250/0ea5638c-289b-4e9d-b9fb-b79b64714c36.jpg"
            }
            fill
            alt="pill"
          />
        </div>
        <p className="sticky top-10 bg-red-500">this is sticky</p>
      </div>
      <div className="relative basis-full">
        <div className="relative mx-auto aspect-[5/4] max-w-lg overflow-hidden">
          <Image
            src={
              "https://geo-media.beatport.com/image_size/250x250/a1c62219-2051-4898-b229-49e8edddea9c.jpg"
            }
            fill
            alt="pill"
          />
        </div>
        <p className="sticky top-10 bg-red-500">this is sticky</p>
      </div> */}
    </section>
  );
}
function Intro() {
  // lg:text-11xl text-7xl
  return (
    <section className="flex h-full w-full justify-between">
      <h1 className="text-[clamp(4.5rem,15vw,12rem)] font-bold uppercase leading-[0.8]">
        <span className="inline-block font-drukText">leave</span>
        <span className="inline-block indent-2 font-drukCondensed lg:indent-6">
          the
        </span>
        <span className="inline-block indent-2 font-drukCondensed lg:indent-6">
          past
        </span>
        <br className="block sm:hidden lg:block" />
        <span className="inline-block indent-0 font-drukText font-black sm:indent-2 lg:indent-0">
          time
        </span>
        <span className="inline-block indent-2 font-drukText font-black lg:indent-6">
          is
        </span>
        <span className="inline-block indent-2 font-drukText font-black lg:indent-6">
          now
        </span>
      </h1>
      <div className="//-translate-x-1/2 flex aspect-square justify-center">
        <div className="relative overflow-hidden">
          <Image src={pill} alt="pill" />
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="mt-16 space-y-10 border-y-4 border-black py-5">
      <Container>
        <Intro></Intro>
        <Images></Images>
      </Container>
    </div>
  );
}
