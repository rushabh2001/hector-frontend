"use client";
import { ToastContainer } from "react-toastify";
import HomeOne from "../../components/homes/home";
import ScrollToTop from "../../components/hooks/scroll-to-top";

const Home = () => {
  return (
    <>
      <ToastContainer style={{ zIndex: 99 }} />
      <HomeOne />
      <ScrollToTop />
    </>
  );
};

export default Home;
