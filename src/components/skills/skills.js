import { useEffect } from "react";
import "./skills.css";
import TagCloud from "TagCloud";
import { Row, Col } from "react-bootstrap";

const TextSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";
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
    const options = {
      radius: 200,
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
