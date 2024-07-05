import { Container } from "./Container";
import SectionHeading from "./SectionHeading";

export default function News() {
  return (
    <section>
      <Container>
        <SectionHeading>New Stories</SectionHeading>
        <article>
          <div className="aspect-[3/2] w-full bg-red-300 lg:aspect-[3/1]"></div>
          <div className="flex items-baseline">
            <h2 className="inline-block w-2/3">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="inline-block w-1/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              necessitatibus ipsa tempora illum odit asperiores omnis amet
              voluptate numquam architecto temporibus veniam sint fugit, vitae
              eius est nam iusto! Aliquam veniam eligendi laborum ab, voluptates
              excepturi inventore et culpa nobis blanditiis. Ipsam blanditiis
              ducimus eligendi!
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
