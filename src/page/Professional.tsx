import Image1 from "../Image/card1.jpg";

export default function Professional() {
  return (
    <div className="py-10 bg-gray-100" id="group">
      <h1 className="text-center text-5xl font-mono text-blue-900 font-bold">
        MEDICAL PROFESSIONALS in GYNECOLOGY
      </h1>
      <div className="flex justify-center gap-72 items-center py-20 px-24 ">
        <div className="flex flex-col gap-5">
          <p className="text-lg font-thin text-blue-600">
              <b>Name:</b> "Aurelyn A. Esporlas"<br/>
              <b>Hospital:</b> "Muntinlupa Lying-In-Center"<br/>
              <b>schedule:</b> "8:00 am. - 5:00 pm."<br/>
              <b>achievement:</b> "Kahit ano muna"
          </p>
          <a href="https://www.facebook.com/andalis.gil" target="_blank" className=" text-center py-1  w-32 text-blue-900 bg-blue-200 rounded-3xl border-2 border-blue-900  font-semibold hover:bg-blue-900 hover:text-white">Contact☎️</a>
        </div> 
        <img src={Image1} className="h-96 border-2 border-blue-500 rounded-xl hover:shadow-xl hover:shadow-blue-700"/>
      </div>
    </div>
  );
}
