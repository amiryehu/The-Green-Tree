import React, { useEffect, useState } from "react";
import { DataContainer, SuccessMessage, Row } from "./GreenItem-styles";
import TreeArea from "../TreeArea/TreeArea";
import {
  fetchData,
  getBoardName,
  getItemsFromBoard,
  getUserAccount,
} from "../../halpers";
import { Item, Numbers, User } from "../../halpers/consts";
import { countAllItemsAndMyItems } from "../../halpers/functions";

const GreenItems = () => {
  const [allNumbers, setAllNumbers] = useState<Numbers>();
  const [boardName, setBoardName] = useState<string>();

  const arrangeAllBoardsIds = async () => {
    const { data } = await fetchData();
    const tempUserId = parseInt(data.user.id);
    // console.log(data);

    const user: User = await getUserAccount(tempUserId);
    console.log(user);

    const tempBoardName = await getBoardName();
    setBoardName(tempBoardName);

    const items: Item[] = await getItemsFromBoard();
    console.log(items);

    // setAllItems(items);
    const allNumbers = countAllItemsAndMyItems(items, user.id);
    setAllNumbers(allNumbers);
    console.log(allNumbers);
  };

  useEffect(() => {
    arrangeAllBoardsIds();
  }, []);

  return (
    <DataContainer>
      <div>
        <SuccessMessage>This is {boardName} board! </SuccessMessage>
        <Row>
          You managed to save <strong>{allNumbers?.paperISave}</strong> papers!
        </Row>
      </div>
      {allNumbers?.counterAllItems && <TreeArea data={allNumbers} />}
    </DataContainer>
  );
};

export default GreenItems;
