import { useEffect, useState } from "react";
import "./skills.css";
import TagCloud from "TagCloud";
import { Row, Col } from "react-bootstrap";
import { WindowDash } from "react-bootstrap-icons";

const TextSphere = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const container = ".tagcloud";
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "Redux",
      "Nodejs",
      "BootStrap",
      "ExpressJs",
      "mongoDB",
      "MySQL",
      "C++",
      "C",
      "GITHUB",
      "Data Structures",
      "GIT",
    ];
    const intialradius = windowWidth < 600 ? 150 : 300;
    const options = {
      radius: intialradius,
      maxSpeed: "normal",
      initSpeed: "fast",
      keep: true,
    };

    TagCloud(container, texts, options);
    return () => {
      const tagCloudContainer = document.querySelector(container);
      tagCloudContainer.innerHTML = "";
    };
  }, []);

  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <Row className="align-items-center">
            <Col>
              <h2>Skills</h2>
              <div className="text-sphere">
                <span className="tagcloud"></span>
              </div>
            </Col>
          </Row>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="text" /> */}
      </section>
    </>
  );
};
export default TextSphere;
