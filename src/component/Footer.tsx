import Logo from "../Image/logo.png";

export default function Navbar() {
  const textStyle = "text-xl text-blue-900 hover:text-blue-500";
  return (
    <div className="flex flex-col bg-slate-400 h-40 items-center gap-2 py-2">
      <a href="/">
        <img src={Logo} alt="Logo" className="h-20" />
      </a>
      <a
        href="https://www.facebook.com/andalis.gil"
        target="_blank"
        className={textStyle}
      >
        Email : myomexthesis@gmail.com
      </a>
      <h1 className={textStyle}>Alrights reserved 2023</h1>
    </div>
  );
}
