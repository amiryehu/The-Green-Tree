import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { DataContainer, SuccessMessage, Row } from "./GreenItem-styles";

import { fetchData, getItemsFromBoard } from "../../halpers";
import { Item, Numbers } from "../../halpers/consts";
import { countAllItemsAndMyItems } from "../../halpers/functions";

const GreenItems = () => {
  const [allNumbers, setAllNumbers] = useState<Numbers>();
  const { allItems, setAllItems }: any = useContext(AppContext);

  const arrangeAllBoardsIds = async () => {
    const { data } = await fetchData();

    const items: Item[] = await getItemsFromBoard();
    console.log(items);
    items.map((item: Item) =>
      setAllItems((prevItems: Item[]) => [...prevItems, item])
    );
    const allNumbers = countAllItemsAndMyItems(items, parseInt(data.user.id));
    setAllNumbers(allNumbers);
    console.log(allNumbers);
    console.log(allItems);

    return items;
  };

  useEffect(() => {
    //arramge all data
    arrangeAllBoardsIds();

    // eslint-disable-next-line
  }, []);

  return (
    <DataContainer>
      <SuccessMessage>Hi Jordi! </SuccessMessage>
      <Row>
        Amount of words written in your teams board:{" "}
        {allNumbers?.counterAllItems}
      </Row>
      <Row>
        Amount of words <strong>you</strong> wrote in the board:{" "}
        {allNumbers?.counterMyItems}
      </Row>
      <Row>My part in the team: {allNumbers?.myPart}%</Row>
      <div>
        <SuccessMessage>Good job!</SuccessMessage>
        <SuccessMessage>
          You managed to save <strong>{allNumbers?.paperISave}</strong> papers!
        </SuccessMessage>
      </div>
    </DataContainer>
  );
};

export default GreenItems;
