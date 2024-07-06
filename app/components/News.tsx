import { Container } from "./Container";
import SectionHeading from "./SectionHeading";

import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { Post } from "./dummy";
import { posts } from "./dummy";

type Props = {
  title: string;
  posts: Post[];
};

function TopStories({ data }: { data: Props }) {
  return (
    <div className="relative isolate">
      <div className="ml:auto relative z-10 mb-10 ml-[65px] mt-20 min-h-[475px] w-80 max-w-lg rounded-md bg-violet-600 p-5 text-white sm:w-[410px] lg:top-10 lg:ml-0 lg:min-h-[600px] lg:w-[768px] lg:overflow-hidden lg:rounded-3xl">
        {/* TITLE, "TOP STORIES" */}
        <div className="mb-5 flex justify-between font-drukWide uppercase">
          <span>{data.title}</span>
        </div>
        {/* INDIVIDUAL STORIES */}
        <ol className="w-full [counter-reset:li] lg:mt-5 lg:w-[320px]">
          {data.posts.map((post) => (
            <li
              key={post.id}
              className="//pb-5 mb-5 border-b border-b-white pl-7 before:absolute before:-left-[4px] before:ml-3.5 before:grid before:h-6 before:w-6 before:place-content-center before:rounded-full before:bg-violet-800 before:text-center before:font-drukText before:text-sm before:text-white before:content-[counter(li)] before:[counter-increment:li] last:mb-0 last:border-b-0 last:pb-0"
            >
              <a href={post.href} className="hover:text-black">
                <h3 className="mb-1 text-lg font-medium leading-tight tracking-wide">
                  {post.title}
                </h3>
              </a>
              <p className="inline-block text-xs uppercase text-white/80">
                <span className="mr-2">{post.author.name}</span>
                <time dateTime={post.datetime}>{post.date}</time>
                <span>
                  <span className="mx-2">|</span>
                  <a
                    href={post.href}
                    aria-label={post.description}
                    className="group/comments hover:text-black"
                  >
                    <ChatBubbleLeftIcon className="mr-2 inline h-3.5 w-3.5 -translate-y-[0.5px]" />
                    <span className="text-xs leading-6 tracking-wide">26</span>
                  </a>
                </span>
              </p>
            </li>
          ))}
        </ol>
      </div>
      <>
        <span
          className={`absolute -left-6 top-0 z-0 flex rotate-180 font-drukCondensed text-8xl uppercase text-violet-900 lg:hidden`}
          style={{ writingMode: "vertical-rl" }}
        >
          {data.title}
        </span>
        <span
          className={`pointer-events-none absolute -bottom-8 -right-14 z-10 hidden rotate-180 font-drukCondensed text-10xl uppercase text-violet-900/30 lg:block`}
          style={{ writingMode: "vertical-rl" }}
        >
          {data.title}
        </span>
      </>
    </div>
  );
}

export default function News() {
  const data: Props = { title: "Top Stories", posts: posts };
  return (
    <section>
      <Container>
        <SectionHeading>New Stories</SectionHeading>
        <article>
          <div className="aspect-[3/2] w-full bg-red-300 lg:aspect-[3/1]"></div>
          <div className="flex flex-col items-baseline lg:flex-row">
            <div className="inline-block grow-0 lg:order-2">
              <TopStories data={data} />
            </div>
            <h2 className="inline-block w-full lg:order-1">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </div>
        </article>
      </Container>
    </section>
  );
}
