import { Link } from "react-router-dom";
export default function Resultpop({
  result,
  remark,
}: {
  result: number;
  remark: string;
}) {
  return (
    <div className="fixed right-96 top-44 h-80 border-2 w-1/3 bg-slate-300 border-slate-400 flex   rounded-xl gap-2 shadow-2xl">
      <div className="flex flex-col gap-2 p-5">
        <h1 className="text-2xl font-mono text-blue-900">Diagnosis Result</h1>
        <p className="text-blue-900 ">Final Certainty : </p>
        <p className="text-blue-900 ">Probability : {result && `${result}%`}</p>
        <p className="text-blue-900 ">Certainty Factor : {remark}</p>

        <Link to="/result" state={{ result: result, remark: remark }}>
          <button className="absolute bottom-5 left-5 text-blue-900 font-mono font-semibold bg-blue-400 rounded-lg w-28 h-14">
            Email Result
          </button>
        </Link>
        <Link to="/professional">
          <button className="absolute bottom-5 right-5 text-blue-900 font-mono font-semibold rounded-lg w-28 h-14 bg-blue-400">
            Medical
            <br />
            Professional
          </button>
        </Link>
      </div>
    </div>
  );
}
