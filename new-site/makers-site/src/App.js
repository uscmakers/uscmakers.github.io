// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import IndexPage from "./pages/IndexPage";
import Projects from "./pages/Projects";
import People from "./pages/People";
import Join from "./pages/Join";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/people" element={<People />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

export default App;
