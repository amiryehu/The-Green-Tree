import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import {
  DataContainer,
  SuccessMessage,
  Row,
  BoltNumber,
} from "./GreenItem-styles";
import { data, mocItemsArr } from "../../halpers/mocData";
import {
  getAllItemsFromAllBoard,
  getBoardIds,
  getItemsFromBoard,
} from "../../halpers";
import { Item } from "../../halpers/consts";
import { countAllItemsAndMyItems } from "../../halpers/functions";

// const toDeleteBoardId = [63206909, 2362992184];

const GreenItems = () => {
  const {
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
  }: any = useContext(AppContext);
  /*
  const arrangeAllBoardsIds = async () => {
    //get all boards Id
    const allBoardsId = await getBoardIds();
    setBoardsIds(() => allBoardsId);

    const promises = allBoardsId.map((id) => getItemsFromBoard(id));
    const result = await Promise.all(promises);

    //set all Item to arr [{name: "" , creator: {id: 1234 }}]
    const itemsInOneArray = result.map((board) => {
      board.map((item: Item) => {
        setAllItems((pervItems: Item[]) => [...pervItems, item]);
      });
    });

    console.log(result);
    console.log(allItems);
  };
*/

  // useEffect(() => {
  // //arramge all data
  // arrangeAllBoardsIds();
  // }, []);

  const numbers = countAllItemsAndMyItems(mocItemsArr, data.account_id);

  console.log(numbers);

  return (
    <DataContainer>
      <SuccessMessage>Hi Amir!</SuccessMessage>
      <Row>
        Amount of words written in your teams board: {numbers.counterAllItems}
      </Row>
      <Row>
        Amount of words <strong>you</strong> wrote in the board:{" "}
        {numbers.counterMyItems}
      </Row>
      <Row>My part in the team: {numbers.myPart}%</Row>
      <div>
        <SuccessMessage>Good job!</SuccessMessage>
        <SuccessMessage>
          You managed to save <strong>{numbers.paperISave}</strong> trees!
        </SuccessMessage>
      </div>
    </DataContainer>
  );
};

export default GreenItems;

// const allItemsFromAllBoard = await getAllItemsFromAllBoard(allBoardsId);
// console.log(allItemsFromAllBoard);
