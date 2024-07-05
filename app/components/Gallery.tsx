import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity/helpers";

function releaseImageUrl(image) {
  const releaseImageUrl = image
    ? urlFor(image.asset)?.width(550).height(310).url()
    : null;
  return releaseImageUrl;
}
export default function Gallery({ data }) {
  // const releaseDate = new Date(date).toDateString();

  return (
    <div className="py-24 sm:py-32">
      <div className="relative">
        {/* <div
            className="absolute bottom-0 left-0 h-[2px] w-full bg-black"
            // ref={underline1}
          ></div>
          <div
            className="absolute -bottom-1 right-0 h-[2px] w-full bg-black"
            // ref={underline2}
          ></div> */}
        <h3 className="text-center font-semibold text-gray-900">
          latest releases
        </h3>
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {data.map((release) => (
          <li key={release._id} className="relative">
            <div className="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image
                src={
                  releaseImageUrl(release.image) ||
                  "https://via.placeholder.com/550x310"
                }
                alt={release.title || "release"}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                width="550"
              />

              {/* <img
                    src={release.cover_image ?? ""}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  /> */}
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">
                  View details for {release.title}
                </span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {release.title}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {release.catno}
            </p>
            <Link
              href={`releases/${release.slug.current}`}
              className="absolute inset-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
