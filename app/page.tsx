import MenuSlider from "./components/v2/MenuSlider";
import StackedPanels from "./components/v2/StackedPanels";
import ReleasesToScroll from "./components/v2/ReleasesToScroll";
import ProgressBar from "./components/v2/ProgressBar";
import HeroSection from "./components/v2/HeroSection";
import ToBeFound from "./components/v2/ToBeFound";
import {
  getLabel,
  getReleases,
  getArtists,
  getLatestReleases,
  // getRelease,
} from "./lib/loaders";
import Gallery from "./components/v2/Gallery";
import Vendors from "./components/v2/Vendors";
import ChooseHero from "./components/v2/ChooseHero";

export default async function Page() {
  const recentReleases = await getLatestReleases();

  return (
    <div>
      <HeroSection />
      <MenuSlider id={"slider"} />
      <StackedPanels id={"panels"} />
      {/* <Vendors /> */}
      {/* <ProgressBar />
      {/* <ToBeFound /> */}
      <Gallery data={recentReleases} />
      {/* <ChooseHero /> */}
      {/* <ReleasesToScroll /> */}
    </div>
  );
}
