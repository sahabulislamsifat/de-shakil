import BottomNavbar from "../components/bottom-navbar/BottomNavbar";
import Hero from "../components/header/Hero";
import LogoMarquee from "../components/marquee/LogoMarquee";
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
    </>
  );
};

export default Home;
