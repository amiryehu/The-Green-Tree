import mondaySdk from "monday-sdk-js";
import { queries } from "./queries";

const monday = mondaySdk();

//Context
export const fetchData = () => {
  return monday.get("context");
};

export const getAllItemsInCurrentBoard = async () => {
  const itemsInBoard = await monday.api(queries.getAllItemsInCurrentBoard);

  return itemsInBoard;
};

export const getItemsFromBoard = async () => {
  const itemsInBoard = await monday
    .api(queries.getAllItemsFromBoardById, {
      variables: { boardIds: /*data.boardIds[0]*/ 2724034441 },
    })
    .then((res: any) => {
      console.log(res?.data?.boards[0]);

      return res?.data?.boards[0]?.items;
    });
  return itemsInBoard;
};

export const getBoardName = async () => {
  const boardName = await monday
    .api(queries.getBoardNameById, {
      variables: { boardIds: /*data.boardIds[0]*/ 2724034441 },
    })
    .then((res: any) => {
      // console.log(res?.data);
      // console.log(res?.data?.boards[0].name);

      return res?.data?.boards[0].name;
    });
  return boardName;
};

export const getUserAccount = async (userId: number) => {
  const itemsInBoard = await monday
    .api(queries.getUser, {
      variables: { userId: userId },
    })
    .then((res: any) => {
      return res?.data?.users[0];
    });
  return itemsInBoard;
};
