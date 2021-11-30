import React from "react";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import EditorPicker from "./components/EditorPicker";
import Trending from "./components/Trending";

import Slider from "./components/Slider";
import Latest from "./components/Latest";
import Insta from "./components/Insta";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <EditorPicker />
      <Trending />
      <Slider />
      <Latest />
      <Insta />
      <Footer />
    </>
  );
};

export default Main;
