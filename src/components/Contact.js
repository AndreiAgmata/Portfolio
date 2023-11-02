import { Container, Form, Button, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d214olp",
        "template_nlqvteb",
        e.target,
        "kjejl9gLns7t2Bpa9"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const { ref, inView } = useInView({
    threshold: 0.3,
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
        .from(".fadeInForm", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.2,
        });
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
      <section id="contact" ref={ref}>
        <div className="contact" ref={el}>
          <Container>
            <div
              className={`${"contact-content"} ${
                inView ? "animateContent" : ""
              }`}
              ref={ref}
            >
              <h2 className="display-5 text-center fw-bold fadeIn">
                Contact Me
              </h2>
              <Container className="form-container">
                <Col xs={8}>
                  <Form onSubmit={sendEmail}>
                    <Form.Group className="mb-3 fadeInForm" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Name"
                        name="name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 fadeInForm" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 fadeInForm" controlId="subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="textarea"
                        placeholder="Subject"
                        name="subject"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 fadeInForm" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} name="message" />
                    </Form.Group>
                    <div className="d-grid fadeInForm">
                      <Button variant="outline-light" type="submit">
                        Send
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Container>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Contact;
