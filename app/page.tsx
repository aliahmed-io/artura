import Navbar from "./components/Navbar";
import IntroLoader from "./components/IntroLoader";
import ParallaxHero from "./components/ParallaxHero";
import Ticker from "./components/Ticker";
import OurStory from "./components/OurStory";
import ImageSequence from "./components/ImageSequence";
import Categories from "./components/Categories";
import ProductSlider from "./components/ProductSlider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen selection:bg-amber-200/50">
      <IntroLoader />
      <Navbar />
      <ParallaxHero />
      <Ticker />
      <OurStory />
      <ImageSequence />
      <Categories />
      <ProductSlider />
      <Footer />
    </main>
  );
}


