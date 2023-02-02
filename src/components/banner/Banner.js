import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import headerImg from "../../assets/img/header-img.svg";
import "./Banner.css";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const toRotate = [
    "Reactjs developer",
    "Nodejs developer",
    "hmm..",
    "Fullstack developer",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 1000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDeleta) => prevDeleta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my PortFolio</span>
              <h1>
                {`Hi,`}
                <br />
                {`i'm Nadeen Shaik`}
                <br />
                <span className="wrap">{text}</span>
              </h1>
              <HashLink to="#connect">
                <button onClick>
                  Let'connect
                  <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="header img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
