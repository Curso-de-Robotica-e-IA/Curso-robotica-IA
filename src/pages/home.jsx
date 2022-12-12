import { useState, useEffect } from "react";
import { Navigation } from "../components/home/navigation";
import { Header } from "../components/home/header";
import { Skills } from "../components/home/skills";
import { About } from "../components/home/about";
import { Projects } from "../components/home/projects";
import { Team } from "../components/home/team";
import { Contact } from "../components/home/contact";
import { Selection } from "../components/home/selection";
import JsonData from "../data/data_home.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Selection data={landingPageData.Selection} />
      <Skills data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Projects data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
