import AboutHero from "../../components/About/AboutHero/AboutHero";
import CompanyHistory from "../../components/About/CompanyHistory/CompanyHistory";
import TeamCulture from "../../components/About/TeamCulture/TeamCulture";
import { Fon } from "../../components/fon";

const About = () => {
  return (
    <div>
      <Fon />
      <AboutHero />
      <CompanyHistory />
      <TeamCulture />
    </div>
  );
};

export default About;
