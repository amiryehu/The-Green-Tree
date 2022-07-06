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
  const { data } = await fetchData();

  const itemsInBoard = await monday
    .api(queries.getAllItemsFromBoardById, {
      variables: { boardIds: /*data.boardIds[0]*/ 2724034441 },
    })
    .then((res: any) => {
      console.log(res?.data);

      return res?.data?.boards[0]?.items;
    });
  return itemsInBoard;
};

export const getUserAccount = async (userId: number) => {
  const { data } = await fetchData();

  const itemsInBoard = await monday
    .api(queries.getUser, {
      variables: { userId: userId },
    })
    .then((res: any) => {
      return res?.data?.users[0];
    });
  return itemsInBoard;
};

// export const getAllItemsFromAllBoard = async (boardId: number[]) => {
//   let allItems: object[] = [];

//   boardId.forEach(async (id) => {
//     const data = await monday.api(queries.getAllItemsFromBoardById, {
//       variables: { boardIds: [id] },
//     });
//     allItems.push(data.data);
//   });

//   return allItems;
// };
