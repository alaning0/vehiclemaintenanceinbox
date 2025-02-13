// src/App.js
import React from "react";
import Header from "./components/Header";  // NEW
import Sidebar from "./components/Sidebar";
import TechnicalSearch from "./components/TechnicalSearch";
import Documentation from "./components/Documentation";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />  {/* NEW: Adds the banner at the top */}
      <div className="flex flex-grow">
        <Sidebar />
        <TechnicalSearch />
        <Documentation />
      </div>
    </div>
  );
};

export default App;