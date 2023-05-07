import Img2 from "../Image/2.jpeg";
import Group from "../assets/svg/Group";
import HomeLogo from "../assets/svg/HomeLogo";
import Info from "../assets/svg/Info";

import AboutUs from "./AboutUs";
import Professional from "./Professional";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 fixed right-5 top-32 border-2 border-blue-900 rounded-lg p-1 bg-slate-200">
        <AnchorLink href="#home">
          <HomeLogo width="32" height="32" />
        </AnchorLink>
        <AnchorLink href="#info">
          <Info width="32" height="32" />
        </AnchorLink>
        <AnchorLink href="#group">
          <Group width="32" height="32" />
        </AnchorLink>
      </div>
      <div className="flex px-20 gap-10 py-32" id="home">
        <img src={Img2} alt="Health" className="w-1/2 h-64 border-2" />
        <p className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, id
          reiciendis laborum adipisci maiores quidem? Temporibus cupiditate
          ullam perspiciatis? Deserunt accusantium corporis sed vel! Facilis
          dolores est sit cumque nobis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo
          debitis, facere hic, omnis voluptatum ad suscipit ipsam numquam
          dolores nulla, doloremque repellendus porro dolore obcaecati dolor
          animi accusantium odit.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cumque autem nihil dolor, natus quasi praesentium. Possimus
          perspiciatis repellendus, qui nesciunt suscipit vero porro amet
          dolorem incidunt quo. Explicabo, necessitatibus?
        </p>
      </div>
      <AboutUs />
      <Professional />
    </>
  );
}
