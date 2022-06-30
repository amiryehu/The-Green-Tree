import React, { useState } from "react";
import "./App.css";
import "monday-ui-react-core/dist/main.css";
// Explore more Monday React Components here: https://style.monday.com/
import GreenItems from "./components/GreenItems/GreenItems";
import { createContext } from "react";
import { Item } from "./halpers/consts";

export const AppContext = createContext({});
const App = () => {
  const [allItems, setAllItems] = useState<Item[]>([]);

  const value = {
    allItems,
    setAllItems,
  };

  return (
    <AppContext.Provider value={value}>
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
    </AppContext.Provider>
  );
};

export default App;
