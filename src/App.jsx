import "./App.css";
import { Routes, Route } from "react-router-dom";

import CustomHook from "./pages/CustomHook";
import Reducer from "./pages/Reducer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customhook" element={<CustomHook />} />
        <Route path="/reducer" element={<Reducer />} />
      </Routes>
    </div>
  );
}
