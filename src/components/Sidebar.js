// src/components/Sidebar.js
import React from "react";

const claims = [
  {
    id: 1,
    date: "Dec 20, 2023",
    text: "During my routes, the seats in the cab of my 2023 HaulMaster get so hot that I have to take breaks more often than usual to avoid getting burned.",
  },
  {
    id: 2,
    date: "Dec 19, 2023",
    text: "Something's up with the HaulMaster - the cab seats heat up a lot, maybe it's some kind of electrical issue with the seats or seat heating system.",
  },
  {
    id: 3,
    date: "Dec 18, 2023",
    text: "Long-distance hauls in my 2023 SuperTruck have become a test of endurance due to the persistently hot seats in the cab.",
  },
];

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white shadow-md p-4 overflow-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Incoming Claims</h2>
      <div className="space-y-4">
        {claims.map((claim) => (
          <div key={claim.id} className="p-3 bg-gray-50 border rounded">
            <p className="text-sm text-gray-700">
              <span className="bg-orange-300 px-1 rounded">O</span> {claim.text}
            </p>
            <p className="text-xs text-gray-500 mt-1">Date: {claim.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;