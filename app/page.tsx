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
import About from "./components/layout/About";
import PinnedMarquee from "./components/common/PinnedMarquee";
import SplitScreen from "./components/layout/SplitScreen";
import GridHeader from "./components/layout/GridHeader";
import Hero from "./components/v2/Hero";
import Navigation from "./components/common/Navigation";
import NavSlider from "./components/layout/NavSlider";
import PinnedSections from "./components/v2/PinnedSections";
import PinnedNav from "./components/v2/PinnedNav";
import ScrollWithText from "./components/v2/ScrollWithText";

export default function Page() {
  return (
    <>
      <Container className="h-12">
        <Navigation />
      </Container>
      <Hero />
      <Container>
        <NavSlider />
      </Container>
      <PinnedSections />
      <PinnedMarquee />
      <Container>
        <ScrollWithText />
      </Container>
      {/* <Marquee /> */}
      {/* <PinnedNav /> */}
      {/* </Container> */}
      {/* <Container>
        <Container3D className="px-8 py-8">
          <GridHeader />
        </Container3D>
      </Container> */}

      {/* <Container>
        <ReleaseSlider />
      </Container> */}

      {/* <Container>
        <Container3D className="px-8 py-8">
          <About />
        </Container3D>
      </Container> */}

      {/* <Container>
        <Container3D className="px-8 py-8">
          <SplitScreen />
        </Container3D>
      </Container> */}

      {/* <Container>
        <Container3D className="px-8 py-8">
          <Header />
        </Container3D>
      </Container> */}

      {/* <Container>
        <Container3D className="px-8 py-8">
          <Highlight />
        </Container3D>
      </Container> */}

      {/* <PinnedMarquee /> */}

      {/* <Container>
        <Container3D className="px-8 py-0">
          <News />
        </Container3D>
      </Container> */}
    </>
  );
}
