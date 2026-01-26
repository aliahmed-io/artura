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
    <main className="bg-[var(--color-night-deep)] min-h-screen selection:bg-yellow-400/30">
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
