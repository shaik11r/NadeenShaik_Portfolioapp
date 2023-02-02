import { useEffect } from "react";
import "./skills.css";
import colorSharp from "../../assets/img/color-sharp.png";
import TagCloud from "TagCloud";
import { Row, Col } from "react-bootstrap";
const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "NodeJs",
        "ReactJs",
        "BootStrap",
        "ExpressJs",
        "mongoDB",
        "MySQL",
        "C++",
        "C",
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
    };
  }, []);
  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <Row className="align-items-center">
            <Col>
              <h2>About Me</h2>
              <p>
                <ul>
                  <li>I completed my graduation in Btech Computer Science</li>
                  <li>Wrote GATE CSE two times and got qualified</li>
                  <li>Started to learn Fullstack develpoment from relevel</li>
                  <li>Currently working in TCS</li>
                </ul>
              </p>
            </Col>
            <Col>
              <div className="text-sphere">
                <span className="tagcloud"></span>
              </div>
            </Col>
          </Row>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="text" /> */}
      </section>
    </>
  )
};
export default TextSphere;
