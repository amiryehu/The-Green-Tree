import React, { useEffect, useState } from "react";
import { DataContainer, SuccessMessage, Row } from "./GreenItem-styles";
import TreeArea from "../TreeArea/TreeArea";
import {
  fetchData,
  getBoardName,
  getItemsFromBoard,
  // getUserAccount,
} from "../../halpers";
import { Item, IUserData /*, User*/ } from "../../halpers/interfaces";
import { countAllItemsAndMyItems } from "../../halpers/functions";

const GreenItems = () => {
  const [usersItemsData, setUsersItemsData] = useState<IUserData>({
    counterAllItems: 0,
    counterMyItems: 0,
    myPart: 0,
    paperISave: 0,
    users: {},
  });
  const [boardName, setBoardName] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [paperSavedInAllBoard, setPaperSavedInAllBoard] = useState<number>(0);

  const getBoardData = async () => {
    // const { data } = await fetchData();
    // const tempUserId = parseInt(data.user.id);
    const { data } = await fetchData();
    console.log(data);

    const tempBoardName = await getBoardName(data.boardIds[0]);
    setBoardName(tempBoardName);

    const items: Item[] = await getItemsFromBoard(data.boardIds[0]);

    const itemsData = countAllItemsAndMyItems(items, data.user.id);
    itemsData.users = formatUserData(itemsData.users);
    setUsersItemsData(itemsData);
    setLoading(false);
    console.log(itemsData);

    const totalPaperSaved = Math.ceil(itemsData?.counterAllItems / 250);
    setPaperSavedInAllBoard(totalPaperSaved);
  };

  const formatUserData = (userData: any) => {
    const dataArr = [];
    for (const key in userData) {
      dataArr.push(userData[key]);
    }
    const sortedData = dataArr.sort(
      ({ numOfWords: a }, { numOfWords: b }) => b - a
    );

    return sortedData;
  };

  useEffect(() => {
    getBoardData();
  }, []);

  const userSize = Object.keys(usersItemsData?.users).length;

  return (
    <DataContainer>
      {loading ? (
        <SuccessMessage>loading...</SuccessMessage>
      ) : (
        <>
          <div style={{ height: 130, marginLeft: 20 }}>
            <SuccessMessage>
              <strong>{boardName} board!</strong>{" "}
            </SuccessMessage>
            <Row>
              You managed to save {Math.max(paperSavedInAllBoard, userSize)}{" "}
              papers!
            </Row>
          </div>
          <TreeArea data={usersItemsData} />
        </>
      )}
    </DataContainer>
  );
};

export default GreenItems;
