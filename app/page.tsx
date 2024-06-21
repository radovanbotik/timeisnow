import { Container } from "./components/layout/Container";
import Header from "./components/layout/Header";
import News from "./components/layout/News";
import ReleaseSlider from "./components/layout/ReleaseSlider";
import { itcMachine, youth } from "./lib/fonts";

export default function Page() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <ReleaseSlider />
      </Container>
      <Container>
        <News />
      </Container>
    </>
  );
}
