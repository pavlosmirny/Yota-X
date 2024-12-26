import FeatureSection from "../components/Feature/FeatureSection";
import { Fon } from "../components/fon";
import Hero from "../components/Hero/Hero";
import PartnersSection from "../components/PartnersSection/PartnersSection";
import AutoSlider from "../components/Slider/NewsSlider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Fon />
      <Hero />
      {/* <Loader /> */}
      <FeatureSection />
      <AutoSlider />

      <PartnersSection />
    </div>
  );
}
