interface Iinformation {
  image: string;
  name: string;
  hospital: string;
  schedule: string;
  achievement: string;
}

interface Icardprops {
  information: Iinformation;
}

export default function Card({ information }: Icardprops) {
  return (
    <div className="flex flex-col border-2 w-64 h-96  p-5 gap-7 rounded-lg border-blue-900 items-center hover:shadow-2xl">
      <img src="" alt="" className="h-36 w-36 rounded-full" />
      <div className="flex justify-center flex-col gap-2">
        <p className="font-mono text-blue-900">Name: {information.name}</p>
        <p className="font-mono text-blue-900">
          Hospital: {information.hospital}
        </p>
        <p className="font-mono text-blue-900">
          Schedule: {information.schedule}
        </p>
        <p className="font-mono text-blue-900">
          Achievement: {information.achievement}
        </p>
      </div>
    </div>
  );
}
