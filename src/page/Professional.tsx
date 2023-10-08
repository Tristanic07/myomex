import Card from "../component/Card";
import Image1 from "../Image/card1.jpg";

export default function Professional() {
  return (
    <div className="py-10 bg-gray-100" id="group">
      <h1 className="text-center text-3xl font-mono text-blue-900 font-bold">
        MEDICAL PROFESSIONALS in GYNECOLOGY
      </h1>
      <div className="flex gap-20 justify-center items-center py-10">
        {[
          {
            image: `${Image1}`,
            name: "Aurelyn A. Esporlas",
            hospital: "Muntinlupa Lying-In-Center",
            schedule: "8:00 am. - 5:00 pm.",
            achievement: "Kahit ano muna",
          },
        ].map((information, index) => {
          return <Card key={index} information={information} />;
        })}
      </div>
    </div>
  );
}
