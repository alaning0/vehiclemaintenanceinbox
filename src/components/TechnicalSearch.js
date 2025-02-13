import React, { useState } from "react";

const TechnicalSearch = () => {
  const [activeTab, setActiveTab] = useState("Simple Semantic Search");

  return (
    <div className="w-1/2 p-6 bg-white shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Technical Manual Search</h2>

      {/* Search Tabs */}
      <div className="flex space-x-4 border-b pb-2 mb-4">
        <button
          className={`font-semibold ${activeTab === "Simple Semantic Search" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("Simple Semantic Search")}
        >
          Simple Semantic Search
        </button>
        <button
          className={`font-semibold ${activeTab === "Semantic + Keyword" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("Semantic + Keyword")}
        >
          Semantic + Keyword
        </button>
        <button
          className={`font-semibold ${activeTab === "Ontology-Powered Search (OAG)" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("Ontology-Powered Search (OAG)")}
        >
          Ontology-Powered Search (OAG)
        </button>
      </div>

      {/* Conditional Forms */}
      {activeTab === "Simple Semantic Search" && (
        <div className="border p-4 rounded bg-gray-50">
          <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Enter search term" />
          <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded">Search</button>
        </div>
      )}

      {activeTab === "Semantic + Keyword" && (
        <div className="border p-4 rounded bg-gray-50">
          <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Enter keyword 1" />
          <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Enter keyword 2" />
          <input type="text" className="w-full p-2 border rounded mb-2" placeholder="Enter keyword 3" />
          <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded">Search</button>
        </div>
      )}

      {activeTab === "Ontology-Powered Search (OAG)" && (
        <div className="border p-4 rounded bg-gray-50">
          <textarea className="w-full p-2 border rounded mb-2" placeholder="Enter detailed search query"></textarea>
          <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded">Search</button>
        </div>
      )}

      {/* AI Search Processing */}
      <div className="border p-4 rounded bg-gray-50">
        <h3 className="text-sm font-semibold text-purple-700">AI Chain of Thought</h3>

        <div className="mt-2 text-sm text-gray-700">
          <p><strong>Searching [Titan] Delivery Vehicles</strong></p>
          <p className="text-gray-600 text-xs">Extracting vehicle model and year... Filtering results...</p>

          <p className="mt-2 text-blue-600 font-semibold">HaulMaster_2023</p>

          <p className="mt-2"><strong>Searching [Titan] Vehicle Maintenance Reports</strong></p>
          <p className="text-gray-600 text-xs">Checking maintenance reports for HaulMaster_2023...</p>

          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li className="text-red-500">Overheating Engine Resolution</li>
            <li className="text-orange-500">Radiator and Cooling Flush</li>
            <li className="text-blue-500">Coolant Hose Replacement</li>
          </ul>
        </div>
      </div>

      {/* AI Search Button */}
      <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded">
        Ontology-Powered Search
      </button>
      
    </div>
  );
};

export default TechnicalSearch;