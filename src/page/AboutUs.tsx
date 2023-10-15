import { useState } from "react";
import Logo from "../Image/logo.png";
import Introduction from "./Introduction";
export default function AboutUs() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="py-10 bg-blue-950" id="info">
      <h1 className="text-center text-5xl font-mono text-white font-bold ">
        About Us
      </h1>
      <div className="flex justify-center gap-36 pt-10 ">
        <img src={Logo} alt="Logo" className="h-1/3 w-1/3" />
        <p className="w-1/3 text-white">
          Welcome to our comprehensive web app designed to assist you in
          identifying symptoms associated with myoma, also known as uterine
          fibroids. This user-friendly platform aims to provide an efficient and
          convenient method for diagnosis screening, allowing you to gain
          insights into the potential presence of myomas and their associated
          symptoms. <br />
          <br />
          The ultimate goal of this web app is to empower you with valuable
          information and facilitate open discussions with healthcare
          professionals. By understanding your symptoms and potential myoma
          condition, you can make informed decisions about your health and
          well-being.
          <br />
          <br />
          Begin your journey towards understanding your symptoms and potential
          myoma condition by accessing our user-friendly web app today.
          Remember, early detection and proactive management can significantly
          impact your well-being and quality of life. Take control of your
          health with our comprehensive screening tool.
          {!isShow ? (
            <div className="">
              <button
                className="text-white text-lg font-semibold hover:text-blue-500"
                onClick={() => setIsShow(!isShow)}
              >
                Learn More...
              </button>
            </div>
          ) : (
            ""
          )}
        </p>
      </div>

      {!isShow ? (
        ""
      ) : (
        <>
          <Introduction />
          <div className="flex justify-end px-36">
            <button
              className="text-white text-lg font-semibold hover:text-blue-500"
              onClick={() => setIsShow(!isShow)}
            >
              Hide...
            </button>
          </div>
        </>
      )}
    </div>
  );
}
