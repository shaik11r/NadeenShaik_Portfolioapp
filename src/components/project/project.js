import { Col, Row, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import hostel from "../../assets/img/cropped-1920-1080-105131.jpg";
import ecommerce from "../../assets/img/cropped-1920-1080-525472.jpg";
import flight from "../../assets/img/cropped-1920-1080-742688.jpg";
import food from "../../assets/img/cropped-1920-1080-958080.jpg";
import under from "../../assets/img/cropped-1920-1080-862733.jpg";
import "./project.css";
export const Projects = () => {
  const projects = [
    {
      title: "Crm-app",
      description:
        "A web based CRM tool which is designed to help small business manage customer service implemented using node js reactjs and mongodb",
      image: under,
      link: "https://github.com/shaik11r/crmapp",
    },
    {
      title: "AirIndiaBackend",
      description:
        "A web based flight booking and management platform designed to help users to search for booking flights.features including flight search, booking management, bording pass implemented using nodejs mongodb and reactjs",
      image: flight,
      link: "https://github.com/shaik11r/airindia_backend",
    },
    {
      title: "EcommerceBackend",
      description:
        "An E-commerce Backend built with Node.js for a personal simple project is a minimalist solution for a small online store. It provides the basic functionality for managing products, processing orders, and handling customer information.",
      image: ecommerce,
      link: "https://github.com/shaik11r/EcommerceBackend",
    },
    {
      title: "Foodistan",
      description:
        "A web based flight booking and management platform designed to help users to search for booking flights.features including flight search, booking management, bording pass implemented using nodejs mongodb and reactjs",
      image: food,
      link: "https://github.com/shaik11r",
    },
    {
      title: "hostel management",
      description:
        "The Hostel Management Full Stack App is a web-based application developed using Node.js and React.js  The Node.js backend provides a robust API for data storage and retrieval, while the React.js frontend offers a smooth and intuitive user experience",
      image: hostel,
      link: "https://github.com/shaik11r",
    },
    {
      title: "React Expense tracker",
      description:
        "A expense tracker built using reactjs it helps to keep track of all expenses and used as note taking app also",
      image: under,
      link: "https://github.com/shaik11r/react-expense-tracker",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              These are my projects that were developed using Nodejs and Reactjs
              Each of these projects has been meticulously crafted with the
              latest technologies and best practices in mind, leveraging the
              power of Node.js for server-side operations and React for creating
              dynamic user interfaces. Whether it be a full-fledged web
              application or a smaller, single-page app, I have utilized my
              knowledge of these two technologies to bring ideas to life
            </p>

            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img
        className="background-img"
        src={colorSharp2}
        alt="it is background"
      />
    </section>
  );
};
