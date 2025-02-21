import { Nav } from "./component/navbar";
import { Hero } from "./component/hero";
import { Expertise } from "./component/expertise";
import { AboutMe } from "./component/about";
import { Portfolio } from "./component/portofolio";
import { Time } from "./component/timeline";
import { Foot } from "./component/footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Expertise />
      <AboutMe />
      <Portfolio />
      <Time />
      <Foot />
    </>
  );
}

export default App;
