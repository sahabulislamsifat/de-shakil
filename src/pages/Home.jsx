import BottomNavbar from "../components/bottom-navbar/BottomNavbar";
import Hero from "../components/header/Hero";
import LogoMarquee from "../components/marquee/LogoMarquee";

const Home = () => {
  return (
    <>
      {/* Hero Section     */}
      <Hero></Hero>
      {/* Bottom Navbar  */}
      <BottomNavbar></BottomNavbar>
      {/* Marquee */}
      <LogoMarquee></LogoMarquee>
    </>
  );
};

export default Home;
