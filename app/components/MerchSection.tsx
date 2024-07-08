import { Container } from "./Container";
import MerchSlider from "./MerchSlider";
import SectionHeading from "./SectionHeading";

export default function MerchSection() {
  return (
    <section className="mt-16 sm:mt-24 lg:mt-32">
      <Container size="md">
        <SectionHeading>OUR MERCH:</SectionHeading>
        <MerchSlider />
      </Container>
    </section>
  );
}
