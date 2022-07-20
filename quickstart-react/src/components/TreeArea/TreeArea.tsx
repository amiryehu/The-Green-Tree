import React from "react";
import { Container } from "./styles";
import Tree from "../Tree/Tree";
import { IUserData, User } from "../../halpers/interfaces";

interface ITreeArea {
  data: any; //todo fix type
}

export enum TREE_SIZE {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
}

const TreeArea = ({ data }: ITreeArea) => {
  const { counterAllItems, users } = data;

  const third = Math.ceil(users.length / 3);

  const calculateTreeSize = (userName: string) => {
    const position = users.findIndex(
      (user: { name: any }) => user.name === userName
    );

    console.log(userName);
    console.log(users);
    console.log(position, third);

    switch (true) {
      case position <= third:
        return TREE_SIZE.LARGE;
      case third < position && position < third * 2:
        return TREE_SIZE.MEDIUM;
      default:
        return TREE_SIZE.SMALL;
    }
  };

  return (
    <Container>
      {users?.map((userData: any, index: number) => (
        <Tree
          size={calculateTreeSize(userData.name)}
          name={userData.name}
          numOfWords={userData.numOfWords}
          key={index}
        />
      ))}
    </Container>
  );
};

export default TreeArea;
