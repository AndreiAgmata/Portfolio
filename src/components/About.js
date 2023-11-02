import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { useEffect, useRef } from "react";
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

function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const el = useRef();
  const tl = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });

      tl.current
        .from(".fadeIn", { duration: 1, opacity: 0, y: 20 })
        .from(
          "p",
          {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.2,
          },
          "-=.5"
        )
        .from("h3", { duration: 0.5, opacity: 0, y: 20 })
        .from(".skill", { duration: 0.5, opacity: 0, y: 20, stagger: 0.2 });
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
      <section id="about" ref={ref}>
        <Container>
          <div className="about">
            <div className="about-content" ref={el}>
              <h2 className="display-5 text-center fw-bold fadeIn">About me</h2>
              <p>
                Hello! I am Andrei. I am currently on my 3rd and last year in
                the Computer programming and Analysis Program at Seneca College.
                Growing up, I was fascinated by computers and was passionate to
                learn everything about technology.
              </p>
              <p>
                I first experienced writing code in high-school. During my last
                2 years, I took the Microsoft Visual Basic and Introduction to
                Java courses. These were very exciting experiences for me as I
                was able to build simple object-oriented programs and even made
                an Adventure game for my final project.
              </p>
              <p>
                After graduating, I took the opportunity to go to Seneca to
                further enhance my knowledge in programming. Fast forward to
                today, I have done multiple school and side projects on my own
                and in collaboration with my colleagues. I am continuously
                working on improving and expanding my skills set in software and
                web development, <em>one block of code at a time.</em>
              </p>
              <h3 className="text-center fw-bold">My Technical Skills</h3>

              <div className="skills">
                <div className="skill">
                  <h5 className="skill-title">Languages</h5>
                  <IconContext.Provider value={{ size: 30 }}>
                    <div className="icons">
                      <div className="icon">
                        <SiCplusplus />
                      </div>
                      <div className="icon">
                        <SiJavascript />
                      </div>
                      <div className="icon">
                        <SiTypescript />
                      </div>
                      <div className="icon">
                        <FaJava />
                      </div>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="skill">
                  <h5 className="skill-title">Front-End</h5>
                  <IconContext.Provider value={{ size: 30 }}>
                    <div className="icons">
                      <div className="icon">
                        <FaReact />
                      </div>
                      <div className="icon">
                        <FaAngular />
                      </div>
                      <div className="icon">
                        <AiFillHtml5 />
                      </div>
                      <div className="icon">
                        <DiCss3 />
                      </div>
                      <div className="icon">
                        <DiSass />
                      </div>
                      <div className="icon">
                        <BsBootstrapFill />
                      </div>
                      <div className="icon">
                        <SiGreensock />
                      </div>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="skill">
                  <h5 className="skill-title">Back-End</h5>
                  <IconContext.Provider value={{ size: 30 }}>
                    <div className="icons">
                      <div className="icon">
                        <SiNodedotjs />
                      </div>
                      <div className="icon">
                        <SiExpress />
                      </div>
                      <div className="icon">
                        <DiNpm />
                      </div>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="skill">
                  <h5 className="skill-title">Database</h5>
                  <IconContext.Provider value={{ size: 30 }}>
                    <div className="icons">
                      <div className="icon">
                        <SiMongodb />
                      </div>
                      <div className="icon">
                        <SiPostgresql />
                      </div>
                      <div className="icon">
                        <SiOracle />
                      </div>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="skill">
                  <h5 className="skill-title">Design</h5>
                  <IconContext.Provider value={{ size: 30 }}>
                    <div className="icons">
                      <div className="icon">
                        <FaFigma />
                      </div>
                      <div className="icon">
                        <SiAdobephotoshop />
                      </div>
                      <div className="icon">
                        <SiAdobeillustrator />
                      </div>
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
