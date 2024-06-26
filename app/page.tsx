import MenuSlider from "./components/v2/MenuSlider";
import StackedPanels from "./components/v2/StackedPanels";
import ReleasesToScroll from "./components/v2/ReleasesToScroll";
import ProgressBar from "./components/v2/ProgressBar";
import HeroSection from "./components/v2/HeroSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <MenuSlider />
      <StackedPanels />
      <div className="h-48"></div>
      <ProgressBar />
      <ReleasesToScroll />
    </>
  );
}
