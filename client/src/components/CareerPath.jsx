import React from "react";

const CareerPath = ({ steps }) => (
  <div className="bg-blue-50 p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-2">Career Path</h3>
    <ul className="list-disc pl-5">
      {steps.map((step, idx) => (
        <li key={idx} className="mb-1">{step}</li>
      ))}
    </ul>
  </div>
);

export default CareerPath;
