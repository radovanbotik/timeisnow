import Image from "next/image";
import angryPill from "../../../public/assets/images/pill421.png";

export default function ImageFade(data: any) {
  return (
    <div className="relative aspect-[5/4]">
      <a
        href={
          data.href ??
          "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg"
        }
      >
        <div className="relative h-full w-full max-w-sm">
          <Image
            src={data.imageUrl ?? angryPill}
            alt={`Artwork for release ${data.title ?? "image"}`}
          />
        </div>
      </a>
      <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
}
