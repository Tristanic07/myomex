import Logo from "../Image/logo.png";
export default function AboutUs() {
  return (
    <div className="py-10 bg-gray-100">
      <h1 className="text-center text-5xl font-mono text-blue-900 font-bold ">
        About Us
      </h1>
      <div className="flex justify-center gap-36 pt-10 ">
        <img src={Logo} alt="Logo" className="h-1/3 w-1/3" />
        <p className="w-1/3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          tempore nisi aut natus vitae ad? Impedit ut a aperiam nulla corrupti
          nam distinctio ab ea dolorem, numquam quasi! Laudantium, reiciendis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sequi et deleniti eum id, assumenda magni enim eligendi, totam
          distinctio nisi repudiandae! Provident vero tempore consequatur hic
          nesciunt neque incidunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius consectetur, nam reiciendis ipsa similique
          necessitatibus, totam numquam ut corporis adipisci quae. Ullam alias
          incidunt ipsa, fugit non tempora fugiat voluptate.
        </p>
      </div>
    </div>
  );
}
