import Card from "../component/Card";

export default function Professional() {
  return (
    <div className="py-10" id="group">
      <h1 className="text-center text-3xl font-mono text-blue-900 font-bold">
        MEDICAL PROFESSIONALS in GYNECOLOGY
      </h1>
      <div className="flex gap-20 justify-center items-center py-10">
        {[
          {
            image: "",
            name: "Dela Cruz, Juan",
            hospital: "OSMON",
            schedule: "7:00 A.M. - 5:00 P.M.",
            achievement: "Kahit ano muna",
          },
          {
            image: "",
            name: "Dalisay, Cardo",
            hospital: "OSMON",
            schedule: "7:00 A.M. - 5:00 P.M.",
            achievement: "Kahit ano muna",
          },
          {
            image: "",
            name: "Britannia, Lelouch Vi",
            hospital: "OSMON",
            schedule: "7:00 A.M. - 5:00 P.M.",
            achievement: "Kahit ano muna",
          },
        ].map((information, index) => {
          return <Card key={index} information={information} />;
        })}
      </div>
    </div>
  );
}
