import { Container } from "./Container";
import LatestReleasesSlider from "./LatestReleasesSlider";
import SectionHeading from "./SectionHeading";

export default function LatestReleases() {
  return (
    <section className="mt-16 sm:mt-24 lg:mt-32">
      <Container size="lg">
        <SectionHeading>OUR MERCH:</SectionHeading>
        <LatestReleasesSlider />
      </Container>
    </section>
  );
}
