import { DiscogsRelease } from "@/app/lib/types";
import { Container } from "./Container";

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  // More files...
];

export default function Gallery({ data }: { data: DiscogsRelease[] }) {
  data.forEach((rel) => console.log(rel.cover_image));
  return (
    <Container>
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
          {data
            .filter(
              (release) =>
                release.cover_image !==
                "https://st.discogs.com/5c97b8c59898ccf83ab43293efe8685dba8f9621/images/spacer.gif",
            )
            .slice(0, 4)
            .map((release) => (
              <li key={release.id} className="relative">
                <div className="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img
                    src={release.cover_image ?? ""}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
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
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
}
