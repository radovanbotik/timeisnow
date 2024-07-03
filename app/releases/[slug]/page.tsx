import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/app/sanity/client";

import Link from "next/link";
import Image from "next/image";
import { fetchRelease } from "@/app/lib/loaders";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Page({ params }: { params: { slug: string } }) {
  const release = await fetchRelease(params.slug);
  const { name, date, image } = release;
  console.log(release);

  const releaseImageUrl = image
    ? urlFor(image.asset)?.width(550).height(310).url()
    : null;
  const releaseDate = new Date(date).toDateString();

  return (
    <main className="container mx-auto grid gap-12 p-12">
      <div className="mb-4">
        <Link href="/">← Back to events</Link>
      </div>
      <div className="items-top grid gap-12 sm:grid-cols-2">
        <Image
          src={releaseImageUrl || "https://via.placeholder.com/550x310"}
          alt={name || "Event"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
        {/* <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            {eventType ? (
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm capitalize dark:bg-gray-800">
                {eventType.replace("-", " ")}
              </div>
            ) : null}
            {name ? (
              <h1 className="mb-8 text-4xl font-bold tracking-tighter">
                {name}
              </h1>
            ) : null}
            {headline?.name ? (
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <dd className="font-semibold">Artist</dd>
                <dt>{headline?.name}</dt>
              </dl>
            ) : null}
            <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <dd className="font-semibold">Date</dd>
              <div>
                {eventDate && <dt>{eventDate}</dt>}
                {eventTime && <dt>{eventTime}</dt>}
              </div>
            </dl>
            {doorsOpenTime ? (
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <dd className="font-semibold">Doors Open</dd>
                <div className="grid gap-1">
                  <dt>Doors Open</dt>
                  <dt>{doorsOpenTime}</dt>
                </div>
              </dl>
            ) : null}
            {venue?.name ? (
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <div className="flex items-start">
                  <dd className="font-semibold">Venue</dd>
                </div>
                <div className="grid gap-1">
                  <dt>{venue.name}</dt>
                </div>
              </dl>
            ) : null}
          </div>
          {details && details.length > 0 && (
            <div className="prose max-w-none">
              <PortableText value={details} />
            </div>
          )}
          {tickets && (
            <a
              className="flex items-center justify-center rounded-md bg-blue-500 p-4 text-white"
              href={tickets}
            >
              Buy Tickets
            </a>
          )}
        </div> */}
      </div>
    </main>
  );
}
