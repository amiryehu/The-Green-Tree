import React, { useState } from "react";
import "./App.css";
import "monday-ui-react-core/dist/main.css";
// Explore more Monday React Components here: https://style.monday.com/
import GreenItems from "./components/GreenItems/GreenItems";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
      }}
    >
      <GreenItems />
    </div>
  );
};

export default App;
