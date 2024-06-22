import { cn } from "@/app/lib/helpers";
import { Article } from "@/app/lib/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Container3D from "./Container3D";
import Button from "../common/Button";
import { drukWide } from "@/app/lib/fonts";

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

const articles: Article[] = [
  {
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
  },
  {
    id: 2,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 3,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 4,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 5,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 10,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 20,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 30,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 40,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 150,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 250,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 350,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
  {
    id: 50,
    title: "Flashback",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere voluptatibus odio odit consectetur! Explicabo eum corporis repellat, illum esse dignissimos soluta et hic numquam nam vel maxime. Quos, numquam.",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos perspiciatis, pariatur atque vel debitis inventore sed, accusamus rem, quibusdam ullam eum tenetur optio nam. Officia, quo, praesentium, suscipit aspernatur molestias quod cumque tenetur perferendis debitis voluptatibus quasi incidunt dignissimos laboriosam eius in consequuntur voluptatem provident? Harum, assumenda perferendis fugit temporibus praesentium consequuntur! Ipsam doloremque odit temporibus quis eaque! Similique beatae deleniti fugiat adipisci voluptatum. Incidunt assumenda quaerat quae beatae, reiciendis alias dolor maiores quisquam, animi magnam recusandae exercitationem aspernatur repellendus voluptate rem cupiditate vero ratione excepturi fugit. Doloremque placeat mollitia neque iure labore? Quod, aperiam sit quibusdam magnam atque incidunt.",
    href: "2",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    date: "March 22",
  },
];

function Aside({ className, data }: { className?: string; data: Article[] }) {
  return (
    <div className={cn("flex h-full w-full flex-wrap", className)}>
      <div className="relative flex h-full w-full flex-grow-0 flex-col pl-8 lg:border-l">
        <h3 className={`${drukWide.className} `}>Articles</h3>
        <ul className="space-y-3">
          {data.map((article, i) => (
            <li key={article.id}>
              <h4 className="inline-block w-fit break-words group-hover:shadow-[0_1px_0_0_rgb(0,0,0)]">
                <a href={article.href}>
                  <span>{article.title}</span>
                </a>
              </h4>
              <h6>
                <span>{article.date}</span>
                {/* <span className="mx-2">|</span>
                  <span>{release.releaseDate}</span> */}
              </h6>
            </li>
          ))}
        </ul>
        {/* <p className="h-full w-full break-words">
            asideaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p> */}
      </div>
    </div>
  );
}

function CardBig({ className, data }: { className?: string; data: Article }) {
  return (
    <div className={cn("group hover:bg-white/10", className)}>
      <div className="flex h-full flex-col gap-8 pl-8 lg:flex-row">
        <div className="h-full w-full lg:basis-2/3">
          <div className="relative aspect-square max-w-lg rounded-sm border">
            <a href={data.href} aria-hidden={true}>
              <Image
                src={data.imageUrl}
                alt={`Image of ${data.title}`}
                sizes="(max-width: 512px) 320px, 512px"
                fill
              />
            </a>
          </div>
        </div>
        <div className="relative flex h-full flex-col gap-4 lg:basis-1/3">
          <h2 className="w-fit">
            <a
              href={data.href}
              className="w-fit after:absolute after:inset-0"
              aria-label={data.title}
            >
              {data.title}
            </a>
          </h2>
          <p className="line-clamp-6">{data.subtitle}</p>
          <div className="">
            <h6>
              <span className="uppercase">Shop</span>
              <span className="mx-2">|</span>
              <span className="uppercase">Read</span>
              <span className="mx-2">&#x2022;</span>
              <span>{data.date}</span>
            </h6>
          </div>
          <Button className="w-full">CHECK</Button>
        </div>
      </div>
    </div>
  );
}

export default function Highlight() {
  return (
    <div>
      <div className="flex w-full flex-col gap-8 sm:flex-row lg:gap-24">
        <CardBig className="lg:basis-2/3" data={article} />
        <Aside className="lg:basis-1/3" data={articles.slice(0, 5)} />
      </div>
    </div>
  );
}
