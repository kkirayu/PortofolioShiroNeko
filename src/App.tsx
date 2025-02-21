import { Nav } from "./component/navbar";
import { Hero } from "./component/hero";
import { Expertise } from "./component/expertise";
import { AboutMe } from "./component/about";
import { Portfolio } from "./component/portofolio";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Expertise />
      <AboutMe id="aboutme"/>
      <Portfolio />
    </>
  );
}

export default App;
