import { Container } from "./Container";

export default function Marquee() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Container size="md">
        <div className="h-10 w-full bg-black"></div>
      </Container>
    </section>
  );
}
