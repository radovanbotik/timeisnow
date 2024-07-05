import { Container } from "./Container";
import LatestReleasesSlider from "./LatestReleasesSlider";
import SectionHeading from "./SectionHeading";

export default function LatestReleases() {
  return (
    <section>
      <Container>
        <SectionHeading>Latest releases:</SectionHeading>
      </Container>
      <LatestReleasesSlider />
    </section>
  );
}
