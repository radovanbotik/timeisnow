import { cn } from "@/app/lib/helpers";
import { Release } from "@/app/lib/types";
import Image from "next/image";

const recentReleases: Release[] = [
  {
    id: 1,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 2,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 3,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 4,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 5,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
];

const featuredRelease: Release = {
  id: 1,
  title: "Flashback",
  artists: ["Jeremy Sylvester", "Maria Labelle"],
  releaseDate: "2024-03-22",
  href: "TIN056",
  catalog: "TIN056",
  imageUrl:
    "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  tracks: [
    {
      id: 1,
      title: "90s man",
      artists: ["Jeremy Sylvester"],
      length: 348,
      BPM: 132,
      key: "G Minor",
    },
    {
      id: 1,
      title: "Flashback",
      artists: ["Jeremy Sylvester"],
      length: 330,
      BPM: 130,
      key: "G Minor",
    },
  ],
};

function FeaturedReleaseImage({ data }: { data: Release }) {
  return (
    <div className="relative aspect-[5/4]">
      <a href={data.href}>
        <Image
          src={data.imageUrl}
          alt={`Artwork for release ${data.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 512px,576px"
        />
      </a>
      <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
}

function FeaturedRelease({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative isolate h-full w-full lg:max-w-lg", className)}
    >
      <div className="pl-10">
        <FeaturedReleaseImage data={featuredRelease} />
      </div>
      <h1 className="relative z-10 -mt-10 text-6xl">big title</h1>
    </div>
  );
}
function RecentReleases({
  className,
  data,
}: {
  className?: string;
  data: Release[];
}) {
  //   const listMarkerStyles =
  // "before:absolute before:left-0 before:grid before:place-content-center before:h-6 before:w-6 before:rounded-full before:bg-black before:text-white before:text-xs before:text-white before:content-[counter(li)] before:[counter-increment:li]";

  return (
    <div
      className={cn(
        "relative ml-auto mt-auto h-full w-full space-y-4 sm:mt-0 lg:max-w-sm",
        className,
      )}
    >
      <h4 className="text-lg leading-none lg:ml-10">Recent releases</h4>
      <ol className="list-none">
        {data.map((release, i) => (
          <li className="group relative flex w-full flex-row gap-2 border-b-2 pb-4 pt-4 first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0 lg:flex-row-reverse">
            {/* Release image */}
            <div className="mb-auto rounded-sm border border-black">
              <div className="hidden w-24 lg:block">
                <div className="relative aspect-[5/4]">
                  <a href={release.href} aria-hidden={true}>
                    <Image
                      src={release.imageUrl}
                      alt={`Artwork for release ${release.title}`}
                      fill
                      sizes="96px"
                      className="rounded-sm"
                    />
                  </a>
                </div>
              </div>
              <div className="relative isolate block w-16 lg:hidden">
                <div className="absolute left-1 top-1 z-10 grid h-4 w-4 place-content-center rounded-full bg-black text-xs">
                  <span className="text-white">{i + 1}</span>
                </div>
                <div className="relative aspect-square">
                  <a href={release.href} aria-hidden={true}>
                    <Image
                      src={release.imageUrl}
                      alt={`Artwork for release ${release.title}`}
                      fill
                      sizes="96px"
                      className="rounded-sm"
                    />
                  </a>
                </div>
              </div>
              {/* <div></div> */}
            </div>
            {/* Release information */}
            <div className="grid grid-cols-1 lg:grid-cols-[40px_auto]">
              <div className="relative hidden lg:flex">
                <div className="z-10 mt-1 grid h-4 w-4 place-content-center rounded-full bg-black text-xs">
                  <span className="leading-none text-white">{i + 1}</span>
                </div>
              </div>
              <div className="w-full">
                <h2 className="w-fit group-hover:shadow-[0_1px_0_0_rgb(0,0,0)]">
                  <a href={release.href}>
                    <span>{release.title}</span>
                    <span className="ml-2">{`[${release.catalog}]`}</span>
                  </a>
                </h2>
                <div>
                  <div className="lg:inline-block">
                    <span className="text-xs">by </span>
                    {release.artists.map((artist, i) => (
                      <a key={artist} href={artist}>
                        <span className="text-xs">{artist}</span>
                        {release.artists.length > 1 &&
                          i !== release.artists.length - 1 && <span>, </span>}
                      </a>
                    ))}
                  </div>
                  <div className="lg:inline-block">
                    <div>
                      <span className="text-xs">
                        Tracks: {release.tracks.length}
                      </span>
                      <span className="mx-2 text-xs">|</span>
                      <span className="text-xs">{release.releaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Header() {
  return (
    <section className="flex flex-col lg:flex-row">
      <FeaturedRelease />
      <RecentReleases data={recentReleases} />
    </section>
  );
}
