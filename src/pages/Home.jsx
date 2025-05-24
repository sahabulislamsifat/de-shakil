import BottomNavbar from "../components/bottom-navbar/BottomNavbar";
import Hero from "../components/header/Hero";
import LogoMarquee from "../components/marquee/LogoMarquee";
import OurProject from "../components/project/OurProject";
import OurServices from "../components/services/OurServices";
// import Testimonial from "../components/testimonial/testimonial";
import VideoSection from "../components/video/VideoSection";

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
      <VideoSection></VideoSection>
      {/* Our Project */}
      <OurProject></OurProject>
      {/* Our Services  */}
      <OurServices></OurServices>
      {/* Testimonial  */}
      {/* <Testimonial></Testimonial> */}
    </>
  );
};

export default Home;
