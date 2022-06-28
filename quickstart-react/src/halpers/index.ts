import React from "react";
import mondaySdk from "monday-sdk-js";
import { queries } from "./queries";
import { API_KEY } from "./consts";

export const getBoardIds = async () => {
  const monday = mondaySdk({ apiToken: API_KEY });
  // const monday = mondaySdk();
  const boards = await monday.api(queries.getBoardIds);

  let tempBoardArr: number[] = [];

  boards?.data?.boards.map((item: object) => {
    const idToInt = parseInt(Object.values(item).join(""));
    tempBoardArr.push(idToInt);
  });

  return tempBoardArr;
};

export const getItemsFromBoard = async (boardId: number) => {
  // const monday = mondaySdk();

  const monday = mondaySdk({ apiToken: API_KEY });
  const itemsInBoard = await monday.api(queries.getAllItemsFromBoard, {
    variables: { boardIds: [boardId] },
  });

  return itemsInBoard?.data?.boards[0]?.items;
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///////
export const getAllItemsFromAllBoard = async (boardId: number[]) => {
  const monday = mondaySdk({ apiToken: API_KEY });
  let allItems: object[] = [];

  boardId.forEach(async (id) => {
    // const monday = mondaySdk();

    const data = await monday.api(queries.getAllItemsFromBoard, {
      variables: { boardIds: [id] },
    });
    allItems.push(data.data);
  });

  return allItems;
};
