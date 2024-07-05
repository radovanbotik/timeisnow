"use client";
// import { urlFor } from "../sanity/helpers";
import Image from "next/image";
import Link from "next/link";
import { ReleaseProps } from "../page";
import { urlFor } from "../sanity/helpers";

function Card({
  artist,
  image,
  slug,
  title,
}: Pick<ReleaseProps, "artist" | "image" | "slug" | "title">) {
  const artistList = artist.map((artist, i, arr) => (
    <Link href={`/artists/${artist.slug.current}`} key={artist.artistName}>
      <sub>
        {artist.artistName}
        {arr.length > 1 && i !== arr.length - 1 ? ", " : null}
      </sub>
    </Link>
  ));

  return (
    <div className="aspect-h-7 aspect-w-10 group relative block w-full overflow-hidden rounded-lg bg-gray-100 bg-transparent text-center focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
      <div>
        <Image
          src={
            urlFor(image)?.width(550).height(310).url() ||
            "https://via.placeholder.com/550x310"
          }
          alt={title || "object"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
      </div>
      <Link
        href={`/releases/${slug.current}`}
        className="absolute inset-0 focus:outline-none"
      >
        <span className="sr-only">View details for {title}</span>
      </Link>
      <h5>{title}</h5>
      <span>
        <sub>by </sub>
        {artistList}
      </span>
    </div>
  );
}

export default function ReverseScrollingColumns({
  data,
}: {
  data: ReleaseProps[];
}) {
  const columnLeft = data.slice(0, 45).slice(0, data.length / 3);
  const columnMiddle = data
    .slice(0, 45)
    .slice(data.length / 3, (data.length / 3) * 2);
  const columnRight = data
    .slice(0, 45)
    .slice((data.length / 3) * 2, data.length);

  console.log(data[0]);

  return (
    <div className="grid w-full grid-cols-3 justify-between overflow-y-hidden">
      <ul className="column-reversed flex flex-col gap-20 px-10">
        {columnLeft.map(({ artist, _id, image, slug, title }) => (
          <li key={_id}>
            <Card artist={artist} image={image} slug={slug} title={title} />
          </li>
        ))}
      </ul>
      <ul className="column flex flex-col gap-20 px-10">
        {columnMiddle.map(({ artist, _id, image, slug, title }) => (
          <li key={_id}>
            <Card artist={artist} image={image} slug={slug} title={title} />
          </li>
        ))}
      </ul>
      <ul className="column-reversed flex flex-col gap-20 px-10">
        {columnRight.map(({ artist, _id, image, slug, title }) => (
          <li key={_id}>
            <Card artist={artist} image={image} slug={slug} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
