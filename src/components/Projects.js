import { Container, Button, Card } from "react-bootstrap";
import { projectsData } from "./data";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Portfolio from "./Images/portfolio-cover.png";
import Spotify from "./Images/spotify-cover.png";
import { IconContext } from "react-icons";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaAngular, FaFigma, FaJava, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiNpm } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });

      tl.current
        .from(".fadeIn", { duration: 1, opacity: 0, y: 20 })
        .from(".project", { opacity: 0, y: 20, duration: 0.5, stagger: 0.4 });
    }, el);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (inView) {
      tl.current.play();
    }
  }, [inView]);

  return (
    <>
      <section id="projects" ref={el}>
        <div className="projects" ref={ref}>
          <Container>
            <div className="projects-content">
              <h2 className="display-5 text-center fw-bold fadeIn">
                My Recent Work
              </h2>
              <div className="projects-container">
                <div className="project-card project">
                  <img src={Portfolio} alt="project" />
                  <div className="project-info">
                    <div className="project-content">
                      <h2>Web Portfolio</h2>
                      <p>
                        Showcases my most recent work with a minimalist website
                        design. Built using React and animations powered by
                        GSAP.
                      </p>
                      <Container className="buttons-container">
                        <Button
                          variant="outline-light me-2"
                          href="https://andreiagmata.com/"
                        >
                          Demo
                        </Button>
                        <Button
                          variant="outline-light"
                          href="https://github.com/AndreiAgmata/My-Portfolio"
                        >
                          Code
                        </Button>
                      </Container>
                    </div>
                    <div className="project-icons">
                      <IconContext.Provider value={{ size: 30 }}>
                        <div className="icons">
                          <div className="icon">
                            <FaReact />
                          </div>
                          <div className="icon">
                            <SiJavascript />
                          </div>
                          <div className="icon">
                            <AiFillHtml5 />
                          </div>
                          <div className="icon">
                            <DiSass />
                          </div>
                          <div className="icon">
                            <SiGreensock />
                          </div>
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
                <div className="project-card-alt project">
                  <img src={Spotify} alt="project" />
                  <div className="project-info">
                    <div className="project-content">
                      <h2>Spotify Discography</h2>
                      <p>
                        A web app that allows users to discover and listen to
                        new music using Spotify's API and OAuth flow.
                      </p>
                      <Container className="buttons-container">
                        <Button
                          variant="outline-light me-2"
                          href="https://spotify-discography.vercel.app"
                        >
                          Demo
                        </Button>
                        <Button
                          variant="outline-light"
                          href="https://github.com/AndreiAgmata/spotify-discography"
                        >
                          Code
                        </Button>
                      </Container>
                    </div>
                    <div className="project-icons">
                      <IconContext.Provider value={{ size: 30 }}>
                        <div className="icons">
                          <div className="icon">
                            <FaAngular />
                          </div>
                          <div className="icon">
                            <SiTypescript />
                          </div>
                          <div className="icon">
                            <AiFillHtml5 />
                          </div>
                          <div className="icon">
                            <DiCss3 />
                          </div>
                          <div className="icon">
                            <BsBootstrapFill />
                          </div>
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                className="button"
                variant="outline-light"
                href="https://github.com/AndreiAgmata"
                size="lg"
              >
                See More
              </Button>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Projects;
