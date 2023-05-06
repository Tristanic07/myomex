import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function EmailResult() {
  const location = useLocation();
  const result = location.state?.result;
  const remark = location.state?.remark;

  useEffect(() => {
    console.log("Location :", location);
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti error
        tempore aspernatur porro deserunt consectetur a, assumenda similique
        laudantium reprehenderit ex illo aut ipsum odit, maiores adipisci. Iure,
        aut minus!
      </p>
      <div className="flex flex-col gap-2 p-10 ">
        <h1 className="text-4xl font-mono text-blue-900">Diagnosis Result</h1>
        <p className="text-blue-900 font-semibold">Final Certainty : </p>
        <p className="text-blue-900 font-semibold">
          Probability : {result && `${result}%`}
        </p>
        <p className="text-blue-900 font-semibold">
          Certainty Factor : {remark}
        </p>
      </div>
    </div>
  );
}
