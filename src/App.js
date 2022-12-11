import ScrollToTop from "react-scroll-to-top";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Blog />
      <Contact />
      <SocialLinks />
      <ScrollToTop smooth style={{ backgroundColor: "gray" }} />
    </div>
  );
}

export default App;
