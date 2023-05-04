import Navbar from "./component/Navbar";
import Diagnosis from "./page/Diagnosis";
import FeedBack from "./page/Feedback";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/feedback" element={<FeedBack />} />
      </Routes>
    </>
  );
}
