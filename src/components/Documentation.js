// src/components/Documentation.js
import React from "react";

const Documentation = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-50 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">Documentation Retrieved</h3>

      <div className="mt-4 p-3 bg-white border rounded">
        <h4 className="text-md font-bold text-gray-800">HaulMaster 2023 Model</h4>
        <p className="text-xs text-gray-500">Engine Overheating Issue</p>

        <img
          src="https://placehold.co/250x150"
          alt="Technical schematic of HaulMaster 2023 engine"
          className="mt-2 rounded"
        />

        <p className="text-sm text-gray-700 mt-2">
          The HaulMaster 2023 is equipped with a high-performance V6 engine designed for efficiency. However, instances of excessive thermal load have been reported.
        </p>

        <h5 className="text-sm font-semibold text-gray-800 mt-3">Troubleshooting & Resolution</h5>
        <ul className="list-disc pl-4 text-sm text-gray-700">
          <li>Inspect the coolant system.</li>
          <li>Check radiator and hoses.</li>
          <li>Ensure coolant levels are within the recommended range.</li>
        </ul>
      </div>

      <button className="w-full mt-4 py-2 bg-purple-600 text-white font-semibold rounded">
        Run LLM
      </button>
    </div>
  );
};

export default Documentation;