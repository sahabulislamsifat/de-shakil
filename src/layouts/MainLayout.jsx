import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Navbar  */}
      <Navbar></Navbar>
      {/* Outlet for nested routes */}
      <Outlet></Outlet>
      {/* Footer  */}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
