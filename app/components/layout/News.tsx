import { cn } from "@/app/lib/helpers";
import { Article } from "@/app/lib/types";
import Image from "next/image";

const article: Article = {
  id: 1,
  title: "Flashback",
  subtitle:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
  href: "2",
  imageUrl:
    "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
  date: "March 22",
};

function CardBig({ className, data }: { className?: string; data: Article }) {
  return (
    <div className={cn("group", className)}>
      <div className="gap-2 pl-8 sm:flex">
        <div className="sm:w-2/3">
          <div className="relative aspect-square rounded-sm border">
            <a href={data.href} aria-hidden={true}>
              <Image
                src={data.imageUrl}
                alt={`Image of ${data.title}`}
                sizes="(max-width: 768px) 320px, 512px"
                fill
              />
            </a>
          </div>
        </div>
        <div className="relative sm:w-1/3">
          <h2>
            <a
              href={data.href}
              className="after:absolute after:inset-0"
              aria-label={data.title}
            >
              {data.title}
            </a>
          </h2>
          <p>{data.subtitle}</p>
          <div className="mt-1">
            <h6>
              <span className="uppercase">Shop</span>
              <span className="mx-2">|</span>
              <span className="uppercase">Read</span>
              <span className="mx-2">&#x2022;</span>
              <span>{data.date}</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
function CardMid({ className, data }: { className?: string; data: Article }) {
  return (
    <div className={cn("", className)}>
      <div className="flex h-full w-full flex-col lg:ml-8 lg:pl-8">
        <div className="">
          <div className="relative aspect-square rounded-sm border">
            <a href={data.href} aria-hidden={true}>
              <Image
                src={data.imageUrl}
                alt={`Image of ${data.title}`}
                sizes="(max-width: 768px) 320px, 512px"
                fill
              />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col">
          <h2>
            <a
              href={data.href}
              className="after:absolute after:inset-0"
              aria-label={data.title}
            >
              {data.title}
            </a>
          </h2>
          <p>{data.subtitle}</p>
          <div className="mt-1">
            <h6>
              <span className="uppercase">Shop</span>
              <span className="mx-2">|</span>
              <span className="uppercase">Read</span>
              <span className="mx-2">&#x2022;</span>
              <span>{data.date}</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
function CardSmall({ className }: { className?: string }) {
  return <div className={cn(" ", className)}>card small</div>;
}
function Aside({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-wrap", className)}>
      <div className="relative flex h-full w-full flex-grow-0 pl-8 pr-8 lg:ml-8 lg:border-l">
        <p className="h-full w-full break-words">
          asideaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </div>
    </div>
  );
}

export default function News() {
  return (
    <div className="w-full">
      <div className="border-b py-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste iure
          nesciunt dolor ducimus ipsa, fugiat corporis quas nisi nihil eum
          molestias explicabo ullam neque ea corrupti aperiam nobis velit? Modi
          et aliquid totam rem laboriosam illum nam sint provident. Molestiae
          animi voluptates ipsa inventore illum nulla cupiditate quo nemo dicta
          ipsum alias consectetur molestias at praesentium placeat quod hic
          amet, neque veritatis esse. Dolor, praesentium. Explicabo sapiente
          libero neque beatae aperiam repudiandae harum. Consequatur laudantium
          voluptate inventore tempore a. Assumenda repellat vel architecto,
          placeat expedita voluptatibus quasi eveniet, neque qui earum cum
          reprehenderit recusandae, debitis impedit dolores quam porro dolor.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 flex-col flex-wrap border-b py-4 sm:flex-row lg:grid-cols-[66.7%_33.3%]">
        <CardBig className="border-b py-4" data={article} />
        <Aside className="my-4" />
        <div className="mt-4 flex flex-col flex-wrap gap-24 p-8 sm:flex-row">
          <CardMid className="flex-1 lg:border-l" data={article} />
          <CardMid className="flex-1 lg:border-l" data={article} />
        </div>
        <Aside className="my-4" />
      </div>
      <div className="pt-4">
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </div>
    </div>
  );
}
