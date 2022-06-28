import React, { useContext, useState } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
// Explore more Monday React Components here: https://style.monday.com/
import GreenItems from "./components/GreenItems/GreenItems";
import { createContext } from "react";
import { Item } from "./halpers/consts";

const monday = mondaySdk();

export const AppContext = createContext({});
const App = () => {
  const [userId, setUserId] = useState<number>();
  const [boardsIds, setBoardsIds] = useState<number[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [myItems, setMyItems] = useState([]);
  const [counterAllItems, setCounterAllItems] = useState(0);
  const [counterMyItems, setCounterMyItems] = useState(0);

  const value = {
    boardsIds,
    setBoardsIds,
    allItems,
    setAllItems,
    myItems,
    setMyItems,
    counterAllItems,
    setCounterAllItems,
    counterMyItems,
    setCounterMyItems,
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
