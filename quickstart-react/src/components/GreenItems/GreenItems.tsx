import React, { useEffect, useState } from "react";
import { DataContainer, SuccessMessage, Row } from "./GreenItem-styles";
import TreeArea from "../TreeArea/TreeArea";
import {
  fetchData,
  getBoardName,
  getItemsFromBoard,
  getUserAccount,
} from "../../halpers";
import { Item, IUserData, User } from "../../halpers/interfaces";
import { countAllItemsAndMyItems } from "../../halpers/functions";

const GreenItems = () => {
  const [usersItemsData, setUsersItemsData] = useState<IUserData>();
  const [boardName, setBoardName] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const getBoardData = async () => {
    const { data } = await fetchData();
    // const tempUserId = parseInt(data.user.id);
    // console.log(data);

    const tempBoardName = await getBoardName();
    console.log(tempBoardName);
    setBoardName(tempBoardName);

    const items: Item[] = await getItemsFromBoard();

    const itemsData = countAllItemsAndMyItems(items, data.user.id);
    itemsData.users = formatUserData(itemsData.users);
    setUsersItemsData(itemsData);
    setLoading(false);
  };

  const formatUserData = (userData: any) => {
    const dataArr = [];
    for (const key in userData) {
      dataArr.push(userData[key]);
    }
    return dataArr;
  };
  useEffect(() => {
    getBoardData();
  }, []);

  return (
    <DataContainer>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <div style={{ height: 130 }}>
            <SuccessMessage>This is {boardName} board! </SuccessMessage>
            <Row>
              You managed to save <strong>{usersItemsData?.paperISave}</strong>
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
