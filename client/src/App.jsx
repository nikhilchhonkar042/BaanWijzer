import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeCard from "./components/ResumeCard";
import CareerPath from "./components/CareerPath";
import Landing from "./pages/Landing";

function App() {
  const resume = { name: "John Doe", summary: "Full Stack Developer" };
  const careerSteps = [
    "Learn JavaScript",
    "Master React",
    "Build Full Stack Projects",
    "Apply for Jobs"
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={
          <div className="p-8 space-y-6">
            <ResumeCard name={resume.name} summary={resume.summary} />
            <CareerPath steps={careerSteps} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
