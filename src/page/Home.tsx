// import { useState } from "react";
import Img2 from "../Image/2.jpeg";
import Sidenav from "../component/Sidenav";
import AboutUs from "./AboutUs";
// import Introduction from "./Introduction";
import Professional from "./Professional";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Sidenav />
      <div className="flex px-20 gap-10 pb-38 p-56" id="home">
        <img src={Img2} alt="Health" className="w-1/2 h-64 border-2" />
        <div className="px-5 flex flex-col gap-3">
          <h1 className="text-center text-4xl font-bold font-mono text-blue-900">
            TAKE A DIAGNOSIS TEST/PROCESS
          </h1>
          <p className="text-md">
            An efficient and convenient method to identify if you have symptoms
            of a myoma condition is through Diagnosis screening
          </p>
          <div className="flex justify-end">
            <Link to="/diagnosis">
              <button className="h-12 w-44 text-blue-900 bg-blue-200 rounded-3xl border-2 border-blue-900  font-semibold hover:bg-blue-900 hover:text-white">
                Take a Diagnosis test
              </button>
            </Link>
          </div>
        </div>
      </div>

      <AboutUs />
      {/* {!isShow ? <button className="">Learn More</button> : <Introduction />} */}
      <Professional />
    </>
  );
}
