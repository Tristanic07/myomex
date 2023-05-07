import { useLocation } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Pointdown from "../assets/svg/Pointdown";
import Img2 from "../Image/2.jpeg";

export default function EmailResult() {
  const location = useLocation();
  const result = location.state?.result;
  const remark = location.state?.remark;

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hn4qpwz",
        "template_j6bvwcg",
        form.current!,
        "n0sMVMDKIwekK7y_P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Diagnosis Result sent successfully!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Diagnosis Result not sent!");
          window.location.reload();
        }
      );
  };

  return (
    <div className="p-10 ">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti error
        tempore aspernatur porro deserunt consectetur a, assumenda similique
        laudantium reprehenderit ex illo aut ipsum odit, maiores adipisci. Iure,
        aut minus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Corrupti error tempore aspernatur porro deserunt consectetur a,
        assumenda similique laudantium reprehenderit ex illo aut ipsum odit,
        maiores adipisci. Iure, aut minus! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Corrupti error tempore aspernatur porro
        deserunt consectetur a, assumenda similique laudantium reprehenderit ex
        illo aut ipsum odit, maiores adipisci. Iure, aut minus!
      </p>
      <div className="flex flex-col gap-2 py-10">
        <h1 className="text-4xl font-mono text-blue-900">Diagnosis Result</h1>
        <p className="text-blue-900 font-semibold">Final Certainty : </p>
        <p className="text-blue-900 font-semibold">
          Probability : {result && `${result}%`}
        </p>
        <p className="text-blue-900 font-semibold">
          Certainty Factor : {remark}
        </p>
      </div>
      <div className="flex justify-between">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="  py-10 w-96 flex flex-col"
        >
          <h1 className="text-xl font-semibold text-blue-900 font-mono flex items-center">
            Send Result to your Email <Pointdown height="20" width="20" />
          </h1>
          <label>
            <h1 className="text-lg font-semibold text-blue-900 font-mono">
              Name:
            </h1>
          </label>
          <input
            type="text"
            name="user_name"
            className="rounded-lg h-11 px-1 border-2"
          />
          <label>
            <h1 className="text-lg font-semibold text-blue-900 font-mono">
              Email:
            </h1>
          </label>
          <input
            type="email"
            name="user_email"
            className="rounded-lg h-11 px-1 w-96 border-2"
          />
          <textarea
            name="message"
            value={` Base on Diagnosis Result, the probability of you having a Myoma was ${result}%, which means that ${remark}`}
            className="rounded-lg h-32 hidden"
          />
          <input
            type="submit"
            value="Send"
            className="bg-blue-800 text-white rounded-lg h-11 mt-5"
          />
        </form>
        <img src={Img2} alt="Health" className="w-1/2 h-72 border-2" />
      </div>
    </div>
  );
}
