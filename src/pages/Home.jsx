import Hero from "../components/header/Hero";
// import LatestProject from "../components/latestProject/LatestProject";
// // import LogoMarquee from "../components/marquee/LogoMarquee";
// import LogoShowCase from "../components/project/LogoShowCase";
// import RecentProjects from "../components/project/RecentProject";
// import OurServices from "../components/services/OurServices";
import FAQSection from "./FAQSection";
import Services from "./Service";
import WorkSection from "./WorkSection";

const Home = () => {
  return (
    <>
      {/* Hero Section     */}
      <Hero></Hero>
      {/* Bottom Navbar  */}
      {/* <BottomNavbar></BottomNavbar> */}
      <WorkSection></WorkSection>
      {/* Marquee */}
      <Services></Services>
      <FAQSection></FAQSection>
      {/* <LogoMarquee></LogoMarquee> */}
      {/* Video Section */}
      {/* <VideoSection></VideoSection> */}
      {/* <LogoShowCase></LogoShowCase> */}
      {/* Our Project */}
      {/* <OurProject></OurProject> */}
      {/* <LatestProject></LatestProject> */}
      {/* Our Services  */}
      {/* <OurServices></OurServices> */}
      {/* Testimonial  */}
      {/* <RecentProjects></RecentProjects> */}
      {/* <Testimonial></Testimonial> */}
    </>
  );
};

export default Home;
