import "./App.css";
import { Routes, Route } from "react-router-dom";

import CustomHook from "./pages/CustomHook";
import Reducer from "./pages/Reducer";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import ErrorBoundary from "./pages/ErrorBoundary";
import ErrorTest from "./pages/ErrorTest";

export default function App() {
  return (
    <div>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customhook" element={<CustomHook />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/errortest" element={<ErrorTest />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </ErrorBoundary>
    </div>
  );
}
