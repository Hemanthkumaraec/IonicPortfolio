import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store"; // Ensure correct path
import Home from "./components/pages/Home/Home";
import Priya from "./components/pages/Skills/Skills";
import About from "./components/pages/About/About";

const Master: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.page?.currentPage); // Ensure `page` exists
  console.log("currentpagemaster", currentPage);

  switch (currentPage) {
    case "priya":
      return <Priya />
    case "about":
      return <About />

    default:
      return <Home />; // Fallback to Home
  }
};

export default Master;
