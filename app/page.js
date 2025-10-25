import AboutPage from "./components/aboutPage";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Item from "./components/item";
import WatchFeaturesSection from "./components/watchFeaturesSection";

export default function Home() {
  return (
  <>
  <Hero/> 
  <Item/>
  <WatchFeaturesSection/>
  <AboutPage/>
  <Footer/>
  </>
  )
}