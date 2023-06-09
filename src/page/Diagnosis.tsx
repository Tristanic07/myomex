import { useEffect, useState } from "react";
import Submit from "../assets/svg/Submit";
import Popup from "reactjs-popup";
import Resultpop from "../component/Resultpop";

export default function Diagnosis() {
  const textStyle = "font-mono text-blue-900 text-xl";
  const [result, setResult] = useState<number>(0);
  const [remark, setRemark] = useState("");
  const [age, setAge] = useState<number>(0);
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
    // Rule-based remark generation
    let remarks = "";
    if (result === 0) return;

    if (result < 30) {
      if (age < 40) {
        remarks = "You have a low probability of having myoma.";
      } else {
        remarks =
          "You have a low probability of having myoma. However, it is advisable to consult a healthcare professional for further evaluation due to your age.";
      }
    } else if (result >= 30 && result < 70) {
      if (age < 40) {
        remarks = "You have a moderate probability of having myoma.";
      } else {
        remarks =
          "You have a moderate probability of having myoma. It is recommended to consult a healthcare professional for a comprehensive evaluation.";
      }
    } else {
      if (age < 40) {
        remarks = "You have a high probability of having myoma.";
      } else {
        remarks =
          "You have a high probability of having myoma. It is advisable to consult a healthcare professional for further assessment and guidance.";
      }
    }

    setRemark(remarks);
  }, [result, age]);

  console.log(result);

  return (
    <div className="pt-10 pb-36 px-10">
      <h1 className="text-center text-4xl font-mono text-blue-900 py-5">
        DISEASE DIAGNOSIS PROCESS
      </h1>

      <div className="p-5 bg-yellow-100">
        <p>
          Please choose the symptoms according to the conditions experienced by
          your body. You can choose the certainty of the condition of the
          symptoms in your body from definitely not to state yes. If you press
          the submit button (📋) below to view the diagnostic result.
        </p>
      </div>

      <div className="px-4 flex justify-between pt-10">
        <div className="flex gap-5">
          <h1 className={`font-semibold ${textStyle}`}>No.</h1>
          <h1 className={`font-semibold ${textStyle}`}>Symptom</h1>
        </div>
        <h1 className={`font-semibold ${textStyle}`}>Select Symptom</h1>
      </div>

      <ul className=" border-x-2 border-t-2 rounded-lg">
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
          <div>
            <button
              className="fixed bottom-10 right-10 h-20 w-20 justify-center flex flex-col items-center bg-blue-200 rounded-lg hover:bg-blue-500"
              onClick={() => handleResult()}
            >
              <Submit height="40" width="40" />
              <p className="text-blue-900 font-semibold text-lg font-mono">
                Submit
              </p>
            </button>
          </div>
        }
      >
        {result === 12 || age === 0 ? (
          <div className="fixed right-96 top-44 h-1/3 w-1/3 border-blue-900 border-2 bg-white rounded-xl flex justify-center items-center">
            <p className={`${textStyle} text-center`}>
              Please Select Symptom <br />
              and
              <br /> input Age!
            </p>
          </div>
        ) : (
          <Resultpop result={result} remark={remark} />
        )}
      </Popup>
      <div className="flex items-center absolute right-14 gap-2 my-2">
        <input
          type="number"
          placeholder="Input Age"
          className="rounded-lg h-10 w-40 px-1 border-2 border-blue-800"
          value={age === 0 ? "" : age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <label>
          <h1 className="text-xl font-semibold text-blue-900 font-mono">Age</h1>
        </label>
      </div>
    </div>
  );
}
