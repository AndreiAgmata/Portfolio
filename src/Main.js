import "./App.scss";
import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

import Preloader from "./components/Preloader";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NavigationBar from "./components/NavigationBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Main() {
  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
      tl.current
        .to(".preloader", { display: "visible" })
        .to(".main", { display: "inline" })
        .to(".preloader", { opacity: 0, display: "none" }, 3.5)
        .to(".main-contents", { display: "inline" });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={el}>
        <div className="preloader">
          <Preloader />
        </div>
        <div className="main">
          <NavigationBar />
          <Home />
          <div className="main-contents">
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
