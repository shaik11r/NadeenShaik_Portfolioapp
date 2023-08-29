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

    // Cleanup function
    return () => {
      // Clean up any resources or state related to the TagCloud instance
      const tagCloudContainer = document.querySelector(container);
      tagCloudContainer.innerHTML = ''; // Clear the content
    };
  }, []);

  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <Row className="align-items-center">
            <Col className="aboutme">
              <h2>About Me</h2>
              <p>
                Greetings! I'm a dynamic MERN stack developer with a year of hands-on experience at TCS.
                Graduated in 2021, I swiftly embraced the world of web development, immersing myself in the captivating
                realms of both frontend creativity and backend logic. 
                Beyond coding, I've achieved the distinction of
                conquering GATE exams in 2021 and 2022, showcasing my dedication to continuous growth. I thrive on
                challenges, particularly diving into the intricate puzzles of backend development, where data management
                and optimization fuel my passion. In my leisure time, I enjoy sharpening my problem-solving skills by
                tackling LeetCode challenges. Explore my portfolio to witness the fusion of design and functionality
                that defines my work. If you're enthusiastic about exploring the boundless potential of technology, I'm
                excited to connect with you for engaging collaborations.
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
  );
};
export default TextSphere;
