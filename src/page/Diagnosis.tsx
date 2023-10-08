import { useEffect, useState } from "react";
import Submit from "../assets/svg/Submit";
import Popup from "reactjs-popup";
import Resultpop from "../component/Resultpop";

export default function Diagnosis() {
  const textStyle = "font-mono text-blue-900 text-xl";
  const [result, setResult] = useState<number>(0);
  const [remark, setRemark] = useState("");
  const [otherSymptoms, setOtherSymptoms] = useState("");
  const [age, setAge] = useState<number>(0);
  const [information, setInformation] = useState([
    //initiating the value of each symptoms
    {
      symptom: "Heavy or prolonged menstrual periods",
      isSelected: false,
      miniSymptoms: [
        { name: "Abdominal cramps", isSelected: false, value: 2 },
        { name: "Irregular bleeding", isSelected: false, value: 2 },
        { name: "Fatigue", isSelected: false, value: 2 },
      ],
      value: 0,
    },
    {
      symptom: "Pain or pressure in the pelvic area",
      isSelected: false,
      miniSymptoms: [
        { name: "Pain during intercourse", isSelected: false, value: 2 },
        { name: "Bloating", isSelected: false, value: 2 },
        { name: "Urinary urgency", isSelected: false, value: 2 },
      ],
      value: 0,
    },
    {
      symptom: "Difficulty emptying the bladder",
      isSelected: false,
      miniSymptoms: [
        { name: "Urinary retention", isSelected: false, value: 2 },
        { name: "Frequent urination", isSelected: false, value: 2 },
        { name: "Weak urine flow", isSelected: false, value: 2 },
      ],
      value: 0,
    },
    {
      symptom: "Frequent Urination",
      isSelected: false,
      miniSymptoms: [
        { name: "Urinary tract infection", isSelected: false, value: 2 },
        { name: "Diabetes", isSelected: false, value: 2 },
        { name: "Bladder dysfunction", isSelected: false, value: 2 },
      ],
      value: 0,
    },
    {
      symptom: "Pain during sex",
      isSelected: false,
      miniSymptoms: [
        { name: "Vaginal dryness", isSelected: false, value: 2 },
        { name: "Pelvic inflammatory disease", isSelected: false, value: 2 },
        { name: "Endometriosis", isSelected: false, value: 2 },
      ],
      value: 0,
    },
    {
      symptom: "Constipation",
      isSelected: false,
      miniSymptoms: [
        { name: "Hard stools", isSelected: false, value: 2 },
        {
          name: "Straining during bowel movements",
          isSelected: false,
          value: 2,
        },
        { name: "Abdominal pain", isSelected: false, value: 2 },
      ],
      value: 0,
    },
  ]);

  //select and unselect symptoms
  const handleSelect = (index: number) => {
    setInformation((prevInformation) =>
      prevInformation.map((elem, i) => {
        if (index === i) {
          return {
            ...elem,
            isSelected: !elem.isSelected,
          };
        }
        return elem;
      })
    );
  };

  //Naive Bayes Algo
  const handleResult = () => {
    const totalValue = information.reduce((acc, info) => {
      const sumOfValues = info.miniSymptoms.reduce((miniAcc, miniSymptom) => {
        return miniAcc + (miniSymptom.isSelected ? miniSymptom.value : 2);
      }, 0);
      return acc + sumOfValues;
    }, 0);

    let priorProbability, likelihood;

    if (age < 20) {
      priorProbability = 0.1; // Prior probability of having myoma
      likelihood = 0.15; // Likelihood of observed symptoms given myoma
    } else if (age < 30) {
      priorProbability = 0.15; // Prior probability of having myoma
      likelihood = 0.2; // Likelihood of observed symptoms given myoma
    } else if (age < 40) {
      priorProbability = 0.25; // Prior probability of having myoma
      likelihood = 0.253; // Likelihood of observed symptoms given myoma
    } else if (age < 50) {
      priorProbability = 0.3; // Prior probability of having myoma
      likelihood = 0.3; // Likelihood of observed symptoms given myoma
    } else {
      priorProbability = 0.4; // Prior probability of having myoma
      likelihood = 0.37; // Likelihood of observed symptoms given myoma
    }

    const probabilityMyoma = totalValue / (likelihood / priorProbability);

    // Set the probability as the result
    setResult(probabilityMyoma);
  };

  //select and unselect mini-symptoms
  const handleSelectMiniSymptom = (mainIndex: number, miniIndex: number) => {
    setInformation((prevState) => {
      const updatedInformation = [...prevState];
      const selectedMiniSymptom = {
        ...updatedInformation[mainIndex].miniSymptoms[miniIndex],
      };
      selectedMiniSymptom.isSelected = !selectedMiniSymptom.isSelected;
      selectedMiniSymptom.value = selectedMiniSymptom.isSelected ? 5.12 : 2;
      updatedInformation[mainIndex].miniSymptoms[miniIndex] =
        selectedMiniSymptom;
      console.log("ito ", selectedMiniSymptom);
      return updatedInformation;
    });
  };
  console.log("this :" + information);

  useEffect(() => {
    // Rule-based remark generation base on result and age
    let remarks = "";
    if (result === 0) return;

    if (result < 30) {
      if (age < 20) {
        remarks = "You have a low probability of having myoma.";
      } else if (age < 30) {
        remarks = "You have a low probability of having myoma.";
      } else if (age < 40) {
        remarks = "You have a low to moderate probability of having myoma.";
      } else if (age < 50) {
        remarks = "You have a low to moderate probability of having myoma.";
      } else {
        remarks =
          "You have a low to moderate probability of having myoma. However, it is advisable to consult a healthcare professional for further evaluation due to your age.";
      }
    } else if (result >= 30 && result < 70) {
      if (age < 20) {
        remarks = "You have a moderate probability of having myoma.";
      } else if (age < 30) {
        remarks = "You have a moderate probability of having myoma.";
      } else if (age < 40) {
        remarks = "You have a moderate to high probability of having myoma.";
      } else if (age < 50) {
        remarks = "You have a moderate to high probability of having myoma.";
      } else {
        remarks =
          "You have a moderate to high probability of having myoma. It is recommended to consult a healthcare professional for a comprehensive evaluation.";
      }
    } else {
      if (age < 20) {
        remarks = "You have a high probability of having myoma.";
      } else if (age < 30) {
        remarks = "You have a high probability of having myoma.";
      } else if (age < 40) {
        remarks = "You have a high probability of having myoma.";
      } else if (age < 50) {
        remarks =
          "You have a high probability of having myoma. It is advisable to consult a healthcare professional for further assessment and guidance.";
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

      <ul className=" border-2 rounded-lg">
        {...information.map((info, index) => {
          return (
            <>
              <li
                className={`flex justify-between items-center h-24  border  px-5 ${
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
              {info.isSelected && (
                <ul className="m-2 flex flex-col items-end">
                  {info.miniSymptoms.map((mini, miniIndex) => {
                    return (
                      <li
                        key={index - miniIndex}
                        className={`flex justify-between items-center h-14 border  px-5 w-2/3 border-1 ${
                          mini.isSelected && "bg-blue-200 "
                        }`}
                      >
                        <div className="flex gap-10">
                          <h1 className={textStyle}>{miniIndex + 1}</h1>
                          <h1 className={textStyle}>{mini.name}</h1>
                        </div>
                        <button
                          className={`h-10 w-20 text-blue-900  rounded-lg border-2  font-semibold hover:bg-blue-900 hover:text-white 
                            `}
                          onClick={() =>
                            handleSelectMiniSymptom(index, miniIndex)
                          }
                        >
                          Add
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
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
          <Resultpop
            result={result}
            remark={remark}
            otherSymptoms={otherSymptoms}
          />
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
      <div>
        <label htmlFor="other">
          <h1 className="text-xl font-semibold text-blue-900 font-mono">
            Other Symptoms:
          </h1>
        </label>
        <input
          name="other"
          type="text"
          placeholder="Other symptoms you may be experiencing..."
          className="h-20 break-word w-2/3 px-3 border-2 rounded-lg"
          onChange={(e) => setOtherSymptoms(e.target.value)}
        />
      </div>
    </div>
  );
}
