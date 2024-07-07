import { Container } from "./Container";
import LatestReleasesSlider from "./LatestReleasesSlider";
import SectionHeading from "./SectionHeading";

export default function LatestReleases() {
  return (
    <section>
      <Container>
        <SectionHeading>OUR MERCH:</SectionHeading>
      </Container>
      <LatestReleasesSlider />
    </section>
  );
}
