import { Container } from "./Container";
import SectionHeading from "./SectionHeading";

import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { Post } from "./dummy";
import { posts } from "./dummy";
import Image from "next/image";
import mesh from "../../public/assets/images/mesh.jpg";

type Props = {
  title: string;
  posts: Post[];
};

// ARTICLE ///////////////////////////////////////
function ThumbnailBig({ data }: { data: Post }) {
  return (
    <div className="//ml-auto mt-5 flex w-[320px] sm:ml-3.5 sm:w-[480px] md:flex-row">
      <div className="relative w-full rounded-sm border border-gray-300">
        <div className="relative block aspect-[3/2] w-full">
          <a href={data.href} aria-hidden={true}>
            <span className="absolute inset-0 m-0 box-border block h-[initial] w-[initial] overflow-hidden p-0">
              <Image
                src={data.image.imageUrl}
                alt={data.image.alt}
                fill={true}
                className="absolute inset-0 m-0 box-border block h-[initial] max-h-full min-h-full w-[initial] min-w-full max-w-full overflow-hidden rounded-sm object-cover p-0"
              />
            </span>
          </a>
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
          aria-hidden={true}
        ></div>
        <div
          className="pointer-events-none absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-black/30 to-transparent"
          aria-hidden={true}
        ></div>
      </div>
    </div>
  );
}

function ContentBig({ data }: { data: Post }) {
  return (
    <div className="relative z-10 -mt-8 mr-6 pr-3 pt-3 sm:ml-auto sm:mr-2.5 sm:w-[440px] sm:px-4 lg:mb-2">
      <h2 className="//[text-shadow:_0_0_40px_rgb(0_0_0)] mb-2 text-3xl font-bold leading-none md:text-4xl">
        <a
          href={data.href}
          className="after-absolute //shadow-sm border-0 bg-transparent after:inset-0 group-hover:shadow-[inset_0px_-20px_0px_0px_#d1d5db]"
        >
          {data.title}
        </a>
      </h2>
      <p className={`text-black`}>{data.description}</p>
      <div className="relative inline-block pt-1 text-xs uppercase tracking-wide">
        <div className="inline-block">
          <a
            href={data.author.href}
            className="mr-2 text-gray-500 hover:shadow-[0px_1px_0px_0px_#71717a]"
          >
            {data.author.name}
          </a>
        </div>
        <div className="inline-block text-gray-400">
          <time dateTime={data.datetime}>{data.date}</time>
          <span>
            <span className="mx-2">|</span>
            <a
              href={data.href}
              aria-label={data.description}
              className="group/comments hover:text-gray-500"
            >
              <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px]" />
              <span className="text-xs leading-6 tracking-wide">26</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

function BigCard({ data }: { data: Post }) {
  return (
    <div className="//border-gray-200 //border-b-8 group relative isolate mx-auto w-full max-w-lg cursor-pointer p-4 pb-16 backdrop-blur-sm hover:bg-gray-200 lg:py-5">
      <ThumbnailBig data={data} />
      <ContentBig data={data} />
    </div>
  );
}

function Content({ data }: { data: Post }) {
  return (
    <div className="flex w-full items-center">
      <span
        className="mr-5 hidden rotate-180 border-l border-gray-500 pl-1 text-xs uppercase tracking-wide text-black md:block"
        style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
      >
        {data.category.title}
      </span>
      <div className="max-w-64 sm:max-w-80">
        <span className="mb-1.5 block w-fit border-b border-gray-500 text-xs tracking-wide text-black md:hidden">
          {data.category.title}
        </span>
        <h2 className="text-xl font-bold md:text-2xl">
          <a
            href={data.href}
            className="after-absolute after:inset-0 group-hover:shadow-[0px_1px_0px_0px_#71717a]"
          >
            {data.title}
          </a>
        </h2>
        <div className="relative inline-block pt-1 text-xs uppercase tracking-wide">
          <div className="inline-block">
            <a
              href={data.author.href}
              className="mr-2 text-gray-500 hover:shadow-[0px_1px_0px_0px_#667eea]"
            >
              {data.author.name}
            </a>
          </div>
          <div className="inline-block text-neutral-400">
            <time dateTime={data.datetime}>{data.date}</time>
            <span>
              <span className="mx-2">|</span>
              <a
                href={data.href}
                aria-label={data.description}
                className="group/comments hover:text-gray-500"
              >
                <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px]" />
                <span className="text-xs leading-6 tracking-wide">26</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Thumbnail({ data }: { data: Post }) {
  return (
    <div className="relative ml-2.5 h-full w-[75px] rounded border border-gray-200 sm:w-[100px]">
      <div className="block md:hidden">
        <div className="relative aspect-square w-full">
          <a
            href={data.href}
            aria-hidden={true}
            className="block h-full w-full"
          >
            <span className="absolute inset-0 m-0 box-border block h-[initial] w-[initial] overflow-hidden p-0">
              <Image
                src={data.image.imageUrl}
                alt={data.image.alt}
                fill={true}
                className="absolute inset-0 m-0 box-border block h-[initial] max-h-full min-h-full w-[initial] min-w-full max-w-full overflow-hidden rounded-sm object-cover p-0"
              />
            </span>
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative aspect-square w-full">
          <a
            href={data.href}
            aria-hidden={true}
            className="block h-full w-full"
          >
            <span className="absolute inset-0 m-0 box-border block h-[initial] w-[initial] overflow-hidden p-0">
              <Image
                src={data.image.imageUrl}
                alt={data.image.alt}
                fill={true}
                className="absolute inset-0 m-0 box-border block h-[initial] max-h-full min-h-full w-[initial] min-w-full max-w-full overflow-hidden rounded-sm object-cover p-0"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ data }: { data: Post }) {
  return (
    <div className="//last-of-type:border-b-0 group relative mx-auto flex w-full max-w-lg items-center justify-between border-b border-gray-200 p-4 text-black hover:cursor-pointer hover:bg-gray-200 md:px-2 lg:py-5">
      <Content data={data} />
      <Thumbnail data={data} />
    </div>
  );
}

function TopStories({ data }: { data: Props }) {
  return (
    <div className="//ml-[65px] //sm:w-80 sticky top-10 isolate z-10 mx-auto mb-10 mt-10 flow-root min-h-[475px] w-full max-w-lg rounded-md bg-black p-5 text-gray-50 sm:w-[410px] lg:ml-0 lg:min-h-[600px] lg:w-[768px] lg:overflow-hidden lg:rounded-sm">
      <div className="absolute inset-0 -z-10 origin-top-left">
        <Image
          src={mesh}
          alt={"no use"}
          fill
          className="pointer-events-none object-cover"
        />
        <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <span
        className={`absolute top-0 -z-10 hidden rotate-180 font-drukCondensed uppercase text-gray-900 sm:-left-24 sm:inline-block sm:text-8xl lg:hidden`}
        style={{ writingMode: "vertical-rl" }}
      >
        {data.title}
      </span>
      {/* TITLE, "TOP STORIES" */}
      <div className="mb-5 ml-6 flex justify-between font-drukWide uppercase text-gray-200">
        <span>{data.title}</span>
      </div>
      {/* INDIVIDUAL STORIES */}
      <ol className="z-10 w-full [counter-reset:li] lg:mt-5 lg:w-[320px]">
        {data.posts.map((post) => (
          <li
            key={post.id}
            className="//pb-5 mb-5 border-b border-b-gray-400 pl-7 before:absolute before:-left-[4px] before:ml-3.5 before:grid before:h-6 before:w-6 before:place-content-center before:rounded-full before:bg-black before:text-center before:font-drukText before:text-sm before:text-gray-300 before:content-[counter(li)] before:[counter-increment:li] last:mb-0 last:border-b-0 last:pb-0"
          >
            <a href={post.href} className="hover:text-gray-100">
              <h3 className="mb-1 text-lg font-medium leading-tight tracking-wide">
                {post.title}
              </h3>
            </a>
            <p className="inline-block text-xs uppercase text-gray-300">
              <span className="mr-2 hover:text-gray-100">
                {post.author.name}
              </span>
              <time dateTime={post.datetime}>{post.date}</time>
              <span>
                <span className="mx-2">|</span>
                <a
                  href={post.href}
                  aria-label={post.description}
                  className="group/comments hover:text-gray-100"
                >
                  <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px]" />
                  <span className="text-xs leading-6 tracking-wide">26</span>
                </a>
              </span>
            </p>
          </li>
        ))}
      </ol>
      <span
        className={`pointer-events-none absolute -right-14 bottom-14 z-10 hidden rotate-180 font-drukCondensed text-10xl uppercase text-white/80 lg:block`}
        style={{ writingMode: "vertical-rl" }}
      >
        {data.title}
      </span>
    </div>
  );
}

export default function News() {
  const data: Props = { title: "New Releases", posts: posts };
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Container>
        {/* <SectionHeading>
          <span>latest news - </span>
          {new Date().toLocaleDateString(undefined, {
            day: "2-digit",
            month: "long",
          })}
        </SectionHeading> */}
        <article>
          {/* <div className="aspect-[3/2] w-full bg-red-300 lg:aspect-[3/1]"></div> */}
          <div className="mt-0 flex flex-col lg:flex-row">
            <div className="inline-block w-full">
              <BigCard data={posts[0]} />
              <ul>
                <li>
                  <SmallCard data={posts[0]} />
                </li>
                <li>
                  <SmallCard data={posts[1]} />
                </li>
              </ul>
            </div>
            <div className="inline-block grow-0">
              <TopStories data={data} />
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
