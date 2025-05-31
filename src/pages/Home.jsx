import BottomNavbar from "../components/bottom-navbar/BottomNavbar";
import Hero from "../components/header/Hero";
import LatestProject from "../components/latestProject/LatestProject";
import LogoMarquee from "../components/marquee/LogoMarquee";
import LogoShowCase from "../components/project/LogoShowCase";
import RecentProjects from "../components/project/RecentProject";
// import OurProject from "../components/project/OurProject";
import OurServices from "../components/services/OurServices";
// import VideoSection from "../components/video/VideoSection";
// import Testimonial from "../components/testimonial/testimonial";

const Home = () => {
  return (
    <>
      {/* Hero Section     */}
      <Hero></Hero>
      {/* Bottom Navbar  */}
      <BottomNavbar></BottomNavbar>
      {/* Marquee */}
      <LogoMarquee></LogoMarquee>
      {/* Video Section */}
      {/* <VideoSection></VideoSection> */}
      <LogoShowCase></LogoShowCase>
      {/* Our Project */}
      {/* <OurProject></OurProject> */}
      <LatestProject></LatestProject>
      {/* Our Services  */}
      <OurServices></OurServices>
      {/* Testimonial  */}
      <RecentProjects></RecentProjects>
      {/* <Testimonial></Testimonial> */}
    </>
  );
};

export default Home;
