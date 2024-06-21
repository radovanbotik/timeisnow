import Spacer from "./components/common/Spacer";
import { Container } from "./components/layout/Container";
import Container3D from "./components/layout/Container3D";
import Header from "./components/layout/Header";
import Highlight from "./components/layout/Highlight";
import News from "./components/layout/News";
import ReleaseSlider from "./components/layout/ReleaseSlider";
import FullBleed from "./components/layout/FullBleed";
import { itcMachine, youth } from "./lib/fonts";
import Marquee from "./components/common/Marquee";

export default function Page() {
  return (
    <>
      <Container>
        <Container3D className="px-8 py-8">
          <Header />
        </Container3D>
      </Container>
      <Container>
        <ReleaseSlider />
      </Container>
      <Container>
        <Container3D className="px-8 py-8">
          <Highlight />
        </Container3D>
      </Container>
      {/* <Container className="">
        <Spacer />
      </Container> */}
      <FullBleed>
        <Marquee />
      </FullBleed>
      <Container>
        <Container3D className="px-8 py-0">
          <News />
        </Container3D>
      </Container>
    </>
  );
}
