import Link from "next/link";
import { cn } from "../lib/helpers";
import { Container } from "./Container";

const projects = [
  {
    name: "Releases",
    initials: "GA",
    href: "#",
    members: 16,
  },
  {
    name: "Artists",
    initials: "CD",
    href: "#",
    members: 12,
  },
  {
    name: "News",
    initials: "T",
    href: "#",
    members: 16,
  },
  {
    name: "Merch",
    initials: "RC",
    href: "#",
    members: 8,
  },
];

function Category({
  href,
  name,
  members,
}: {
  href: string;
  name: string;
  members: number;
}) {
  return (
    <div className="flex items-center justify-center truncate rounded-xl border border-gray-200 bg-white text-center">
      <Link href={href} className="truncate px-4 py-2 text-sm">
        <span className="text-xl font-medium text-gray-900 hover:text-gray-600">
          {name}
        </span>
        <br />
        <span className="text-xl text-gray-500">{members}</span>
      </Link>
    </div>
  );
}

export default function Categories() {
  return (
    <section className="py-5">
      <Container size="lg">
        <ul
          role="list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map(({ name, href, members }) => (
            <li key={name} className="col-span-1 rounded-md shadow-sm">
              <Category href={href} name={name} members={members} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
