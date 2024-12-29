import CTASection from "../components/CTASection/CTASection";
import FeatureSection from "../components/Feature/FeatureSection";
import { Fon } from "../components/fon";
import FrameworkGrid from "../components/FrameworkGrid/FrameworkGrid";
import Hero from "../components/Hero/Hero";
import PartnersSection from "../components/PartnersSection/PartnersSection";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import AutoSlider from "../components/Slider/NewsSlider";
import WhyUs from "../components/WhyUs/WhyUs";
import WorkflowProcess from "../components/WorkflowProcess/WorkflowProcess";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Fon />
      <Hero />
      <SectionDivider />
      <FeatureSection />
      <WorkflowProcess />
      <AutoSlider />
      <FrameworkGrid />
      <WhyUs />
      <PartnersSection />
      <CTASection />
    </div>
  );
}
