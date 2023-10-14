import { useState } from "react";
import Logo from "../Image/logo.png";
import Dropdown from "../assets/svg/Dropdown";
import Bgnav from "../Image/bgnav.png";

export default function Navbar() {
  const textStyle = "text-lg text-white hover:text-blue-500";
  const [isDropDown, setIsDropDown] = useState(false);
  const [selected, setSelected] = useState("");

  const handleClickSelected = (inputName: string) => {
    setSelected(inputName);
  };

  const handleClick = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <nav
      className="flex bg-slate-100 h-24 items-center justify-between px-20 fixed w-full "
      style={{ backgroundImage: `url(${Bgnav})` }}
    >
      <a href="/">
        <img src={Logo} alt="Logo" className="h-20 hover:h-24" />
      </a>
      <ul className="flex gap-10">
        <li>
          <a href="/" className={textStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="/diagnosis" className={textStyle}>
            Diagnosis
          </a>
        </li>
        <li>
          <a href="/feedback" className={textStyle}>
            FeedBack
          </a>
        </li>

        <li>
          <button
            className={`w-24 flex ${textStyle} ${
              isDropDown && "text-blue-500"
            }`}
            onClick={handleClick}
          >
            Account
            <Dropdown width="24" height="24" />
          </button>
        </li>
        {isDropDown && (
          <div className="absolute top-20 right-24 px-10 py-5 w-96 h-84 flex  flex-col gap-3 border border-blue-900 bg-slate-200 rounded-s-3xl rounded-b-3xl">
            <h1 className="text-2xl font-bold text-blue-900 font-mono">
              Log In To Your Account
            </h1>
            <p className="text-sm text-blue-900 font-mono">
              Sign in to save your own collection of tools and articles.
            </p>
            <form className="flex flex-col gap-2">
              <div className="h-24">
                <label>
                  <h1
                    className={` font-semibold text-blue-900  font-mono ${
                      selected === "name" ? "text-xs" : "text-lg"
                    }`}
                  >
                    NAME
                  </h1>

                  <input
                    type="text"
                    name="name"
                    className={`w-full px-1  border-b-4 border-blue-900 bg-slate-200 ${
                      selected === "name" ? "h-9" : "h-2"
                    }`}
                    onClick={() => handleClickSelected("name")}
                    onFocus={(e) => e.target.blur()}
                  />
                </label>
                <label>
                  <h1
                    className={` font-semibold text-blue-900  font-mono ${
                      selected === "email" ? "text-xs" : "text-lg"
                    }`}
                  >
                    EMAIL
                  </h1>

                  <input
                    type="email"
                    name="user_email"
                    className={`w-full px-1  border-b-4 border-blue-900 bg-slate-200 ${
                      selected === "email" ? "h-9" : "h-2"
                    }`}
                    onClick={() => handleClickSelected("email")}
                    onFocus={(e) => e.target.blur()}
                  />
                </label>
              </div>

              <label className="flex gap-2">
                <input type="checkbox" />
                <p className="font-semibold text-blue-900  font-mono text-lg">
                  REMEMBER
                </p>
              </label>

              <div className="flex justify-between items-center">
                <button className="h-12 w-32 text-blue-900 bg-blue-200 rounded-3xl border-2 border-blue-900  font-bold hover:bg-blue-900 hover:text-white">
                  LOG IN
                </button>
                <p className="text-blue-900 text-xs">
                  Forgot Password | Sign Up
                </p>
              </div>
            </form>
          </div>
        )}
      </ul>
    </nav>
  );
}
