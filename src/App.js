import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/navbar/navbar";
import { Banner } from "./components/banner/Banner";
import TextSphere from "./components/skills/skills";
import "./App.css";
import { Projects } from "./components/project/project";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import Vertical from "./components/verticalTImeline/vertical";
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Vertical/>
      <TextSphere />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
