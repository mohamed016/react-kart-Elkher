import React, { useEffect } from "react";
import "../assets/css/landing.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import aos
import Aos from "aos";
import "aos/dist/aos.css";
// import "aos/dist/aos.js";

//import-components
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Problems from "../components/Problems";
import Questions from "../components/Questions";
import Courses from "../components/Courses";
import Communication from "../components/Communication";
import Footer from "../components/Footer";

function Landing() {
  useEffect(() => {
    Aos.init({
      duration:1200,
    });
    
  }, []);
  return (
    <>
      <Header />
      <About />
      <Services />
      <Problems />
      <Courses />
      <Questions />
      <Communication />
      <Footer />
    </>
  );
}

export default Landing
