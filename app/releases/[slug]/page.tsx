import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/app/sanity/client";

import Link from "next/link";
import Image from "next/image";
import { ReleaseProps } from "@/app/page";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Page({ params }: { params: { slug: string } }) {
  const QUERY = `*[_type=='release' && slug.current=='${params.slug}'][0]`;
  const release = (await sanityFetch({ query: QUERY })) as ReleaseProps;

  const { title, date, image } = release;
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
          alt={title || "Event"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          width="550"
        />
      </div>
    </main>
  );
}
