import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Pointdown from "../assets/svg/Pointdown";

export default function FeedBack() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hn4qpwz",
        "template_pt9spgd",
        form.current!,
        "n0sMVMDKIwekK7y_P"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent!");
          window.location.reload();
        }
      );
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="  py-10 w-96 flex flex-col"
      >
        <h1 className="text-xl font-semibold text-blue-900 font-mono flex items-center">
          Write us a Message <Pointdown height="20" width="20" />
        </h1>

        <label>
          <h1 className="text-lg font-semibold text-blue-900 font-mono">
            Name
          </h1>
        </label>
        <input type="text" name="user_name" className="rounded-lg h-11 px-1" />
        <label>
          <h1 className="text-lg font-semibold text-blue-900 font-mono">
            Email
          </h1>
        </label>
        <input
          type="email"
          name="user_email"
          className="rounded-lg h-11 px-1 w-96"
        />
        <label>
          <h1 className="text-lg font-semibold text-blue-900 font-mono">
            Message
          </h1>
        </label>
        <textarea name="message" className="rounded-lg px-1 h-32" />
        <input
          type="submit"
          value="Send"
          className="bg-blue-800 rounded-lg text-white h-11 mt-5"
        />
      </form>
    </div>
  );
}
