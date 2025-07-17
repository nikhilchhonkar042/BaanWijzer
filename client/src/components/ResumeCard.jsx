import React from "react";

const ResumeCard = ({ name, summary }) => (
  <div className="bg-white shadow rounded p-4">
    <h2 className="text-xl font-bold mb-2">{name}</h2>
    <p className="text-gray-700">{summary}</p>
  </div>
);

export default ResumeCard;
