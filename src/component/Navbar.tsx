import { useState } from "react";
import Logo from "../Image/logo.png";
import Dropdown from "../assets/svg/Dropdown";
export default function Navbar() {
  const textStyle = "text-xl text-blue-900 hover:text-blue-500";
  const [isDropDown, setIsDropDown] = useState(false);

  const handleClick = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <nav className="flex bg-slate-100 h-24 items-center justify-between px-20 mb-10">
      <a href="/">
        <img src={Logo} alt="Logo" className="h-20" />
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
          <ul className=" absolute top-20 right-10 bg-white rounded-lg shadow-md p-3">
            <li className="text-base hover:text-blue-500">Account Setting</li>
            <li className="text-base text-red-500 hover:text-red-400">
              Logout
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}
