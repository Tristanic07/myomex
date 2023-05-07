import Img2 from "../Image/2.jpeg";
import AboutUs from "./AboutUs";
import Professional from "./Professional";

export default function Home() {
  return (
    <>
      <div className="flex px-20 gap-10 py-32">
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
