import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { DataContainer, SuccessMessage, Row } from "./GreenItem-styles";
import { TreesArea, TreeStyle } from "../Tree/Tree-styles";

import { fetchData, getItemsFromBoard, getUserAccount } from "../../halpers";
import { Item, Numbers, User } from "../../halpers/consts";
import { countAllItemsAndMyItems } from "../../halpers/functions";

const GreenItems = () => {
  const [allNumbers, setAllNumbers] = useState<Numbers>();
  const [userDetails, setUserDetails] = useState<User>();
  const { allItems, setAllItems }: any = useContext(AppContext);

  const arrangeAllBoardsIds = async () => {
    const { data } = await fetchData();
    const tempUserId = data.user.id;
    console.log(data);

    const user: User = await getUserAccount(parseInt(tempUserId));
    setUserDetails(user);
    console.log(user);

    const items: Item[] = await getItemsFromBoard();
    console.log(items);
    items.map((item: Item) =>
      setAllItems((prevItems: Item[]) => [...prevItems, item])
    );
    const allNumbers = countAllItemsAndMyItems(items, user.id);
    setAllNumbers(allNumbers);
    console.log(allNumbers);
    // console.log(allItems);

    return items;
  };

  useEffect(() => {
    arrangeAllBoardsIds();
    // eslint-disable-next-line
  }, []);
  const trees = [1, 2, 3, 4, 5, 6];
  return (
    <DataContainer>
      <div>
        <SuccessMessage>Hi {userDetails?.name.split(" ")[0]}! </SuccessMessage>
        <Row>
          You managed to save <strong>{allNumbers?.paperISave}</strong> papers!
        </Row>
      </div>
      <TreesArea></TreesArea>
    </DataContainer>
  );
};

export default GreenItems;

{
  /* <Row>
        words in your board:
        {allNumbers?.counterAllItems}
      </Row>
      <Row>
        words <strong>you</strong> wrote in board:
        {allNumbers?.counterMyItems}
      </Row>
      <Row>My part in the team: {allNumbers?.myPart}%</Row> */
}
