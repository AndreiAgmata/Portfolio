import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";

function NavigationBar() {
  const el = useRef();
  const [menuClicked, setMenuClicked] = useState(false);
  const tl = useRef();
  const tl2 = useRef();
  const tl3 = useRef();

  function handleMenuClicked() {
    setMenuClicked(!menuClicked);
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });

      tl2.current = gsap.timeline({
        paused: true,
      });

      tl.current.to(
        ".bar-1",
        {
          duration: 0.5,
          attr: { d: "M8,2 L2,8" },
          x: 1,
          ease: "Power2.easeInOut",
        },
        "start"
      );

      tl.current.to(
        ".bar-2",
        {
          duration: 0.5,
          autoAlpha: 0,
        },
        "start"
      );

      tl.current.to(
        ".bar-3",
        {
          duration: 0.5,
          attr: { d: "M8,8 L2,2" },
          x: 1,
          ease: "Power2.easeInOut",
        },
        "start"
      );

      tl2.current.to(".fullpage-menu", {
        duration: 0,
        display: "block",
        ease: "Expo.easeInOut",
      });

      tl2.current.from(".menu-bg span", {
        duration: 1,
        y: "-100%",
        ease: "Expo.easeInOut",
      });

      tl2.current.from(
        ".main-menu li a",
        {
          duration: 1,
          y: "100%",
          stagger: 0.2,
          ease: "Expo.easeInOut",
        },
        "-=0.3"
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (menuClicked) {
      tl.current.play();
      tl2.current.play();
    } else {
      tl2.current.reverse();
      tl.current.reverse();
    }
  }, [menuClicked]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl3.current = gsap.timeline();
      tl3.current
        .from("header", { duration: 1, y: -100 }, 5)
        .from("#nav-logo", { duration: 1, y: -100 }, "start")
        .from(".menu-toggle", { duration: 1, y: -100 }, "start");
    }, el);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section ref={el}>
        <header>
          <Container>
            <div className="header-row">
              <div className="brand-logo">
                <a href="#home">
                  <svg
                    id="nav-logo"
                    viewBox="0 0 455 494"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M227.357 177.015C178.566 274.592 138.391 354.429 138.078 354.429C137.766 354.43 135.552 350.279 133.157 345.206C129.414 337.275 116.233 309.779 104.836 286.127C102.986 282.288 101.681 278.8 101.935 278.376C102.19 277.951 115.877 277.639 132.351 277.681C148.826 277.724 162.546 277.519 162.84 277.224C163.693 276.371 161.218 263.028 159.075 256.931C152.396 237.93 136.013 223.168 115.513 217.681C108.22 215.729 104.423 215.567 54.6828 215.091C25.5038 214.812 0.929735 214.853 0.0751674 215.181C-1.1653 215.657 12.5895 243.916 68.0836 354.902C106.343 431.42 137.871 494.014 138.146 494C138.421 493.985 156.396 458.426 178.091 414.978C264.822 241.277 316.169 139.054 316.688 139.053C316.988 139.052 318.405 141.632 319.836 144.786C321.268 147.94 329.436 165.07 337.986 182.855C346.538 200.639 353.535 215.334 353.535 215.51C353.535 215.687 340.1 215.83 323.679 215.83C307.144 215.83 293.577 216.229 293.271 216.725C292.967 217.216 293.404 221.591 294.244 226.447C298.394 250.455 316.57 270.176 340.074 276.169C345.074 277.443 354.957 277.699 400.265 277.726C430.08 277.743 454.71 277.522 454.998 277.234C455.537 276.696 317.88 0.72037 316.715 0.000452004C316.359 -0.218914 276.148 79.4367 227.357 177.015Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <button
                className="menu-toggle"
                id="menu-toggle"
                onClick={handleMenuClicked}
              >
                <svg
                  viewBox="0 0 12 10"
                  className="hamburger"
                  height="40px"
                  width="40px"
                >
                  <path d="M10,2 L2,2" className="bar-1"></path>
                  <path d="M2,5 L10,5" className="bar-2"></path>
                  <path d="M10,8 L2,8" className="bar-3"></path>
                </svg>
              </button>
            </div>
          </Container>
        </header>

        <section className="fullpage-menu">
          <div className="fullpage-menu-inner">
            <div className="menu-bg">
              <span></span>
            </div>

            <nav>
              <ul className="main-menu">
                <li>
                  <a href="#about" onClick={handleMenuClicked}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={handleMenuClicked}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleMenuClicked}>
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/1CRHmMeYeKUj7szIUzNs95zaZDjWMltjgKTJspUmU9FA/edit?usp=sharing"
                    onClick={handleMenuClicked}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </section>
    </>
  );
}

export default NavigationBar;
