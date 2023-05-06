import { useEffect, useState } from "react";
import Submit from "../assets/svg/Submit";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

export default function Diagnosis() {
  const textStyle = "font-mono text-blue-900 text-xl";
  const [result, setResult] = useState<number>(0);
  const [remark, setRemark] = useState("");
  const [information, setInformation] = useState([
    {
      symptom: "Heavy or prolonged menstrual periods",
      value: 2,
      isSelected: false,
    },
    {
      symptom: "Pain or pressure in the pelvic area",
      value: 2,
      isSelected: false,
    },
    {
      symptom: "Difficulty emptying the bladder",
      value: 2,
      isSelected: false,
    },
    {
      symptom: "Frequently Urination",
      value: 2,
      isSelected: false,
    },
    {
      symptom: "Pain during sex",
      value: 2,
      isSelected: false,
    },
    {
      symptom: "Constipation",
      value: 2,
      isSelected: false,
    },
  ]);

  const handleSelect = (index: number) => {
    setInformation((prevInformation) =>
      prevInformation.map((elem, i) => {
        if (index === i) {
          return {
            ...elem,
            isSelected: !elem.isSelected,
            value: elem.isSelected ? 2 : 16.5,
          };
        }
        return elem;
      })
    );
  };

  //Naive Bayes Algo
  const handleResult = () => {
    let myomaProbability = 0;
    information.forEach((info) => {
      if (
        info.symptom === "Heavy or prolonged menstrual periods" ||
        info.symptom === "Pain or pressure in the pelvic area" ||
        info.symptom === "Difficulty emptying the bladder" ||
        info.symptom === "Frequently Urination" ||
        info.symptom === "Pain during sex" ||
        info.symptom === "Constipation"
      ) {
        myomaProbability += info.value;
      }
    });
    setResult(myomaProbability);
  };

  useEffect(() => {
    let remarks = "";
    if (result === 0) return;
    if (result < 30) {
      remarks = "You have a low result of having myoma.";
    } else if (result >= 30 && result < 70) {
      remarks = "You have a moderate result of having myoma.";
    } else {
      remarks = "You have a high result of having myoma.";
    }

    setRemark(remarks);
  }, [result]);

  console.log(result);

  return (
    <div>
      <h1 className="text-center text-4xl font-mono text-blue-900">
        DISEASE DIAGNOSIS PROCESS
      </h1>

      <div className="px-14 flex justify-between pt-10">
        <div className="flex gap-5">
          <h1 className={`font-semibold ${textStyle}`}>No.</h1>
          <h1 className={`font-semibold ${textStyle}`}>Symptom</h1>
        </div>
        <h1 className={`font-semibold ${textStyle}`}>Select Symptom</h1>
      </div>

      <ul className="mx-10 border-x-2 border-t-2 rounded-lg">
        {...information.map((info, index) => {
          return (
            <li
              className={`flex justify-between items-center h-24 border-b-2  px-5 ${
                info.isSelected && "bg-blue-200 "
              }`}
            >
              <div className="flex gap-10">
                <h1 className={textStyle}>{index + 1}</h1>
                <h1 className={textStyle}>{info.symptom}</h1>
              </div>
              <button
                className={`h-12 w-24 text-blue-900  rounded-lg border-2  font-semibold hover:bg-blue-900 hover:text-white ${
                  info.isSelected
                    ? "text-white bg-blue-900 border-white"
                    : "bg-blue-300 border-blue-900"
                }`}
                onClick={() => handleSelect(index)}
              >
                Select
              </button>
            </li>
          );
        })}
      </ul>
      <Popup
        trigger={
          <button
            className="fixed bottom-10 right-10 h-20 w-20 justify-center flex items-center bg-blue-200 rounded-lg hover:bg-blue-500"
            onClick={() => handleResult()}
          >
            <Submit />
          </button>
        }
        closeOnDocumentClick={false}
        modal
      >
        {(close) => (
          <div className="fixed right-1/2 top-1/2 h-32 border-2 w-64 bg-slate-300 border-slate-400 flex items-center justify-center rounded-xl">
            <button
              className="absolute right-1 top-1 rounded-xl border-2 h-7 w-10 bg-red-500  "
              onClick={() => close()}
            >
              <p> x</p>
            </button>
            <Link
              to="/result"
              state={{ diagnosisResult: result, remark: remark }}
              className={textStyle}
            >
              View Result Here!!!
            </Link>
          </div>
        )}
      </Popup>
    </div>
  );
}
