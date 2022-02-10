import React from "react";
import { Route, Routes } from "react-router-dom";
import { Canvas } from "./pages/Canvas";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
    </Routes>
  );
}

function Hello() {
  return (
    <div>
      <Canvas />
      Hello word
    </div>
  );
}
