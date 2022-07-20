import React from "react";
import { Container } from "./styles";
import Tree from "../Tree/Tree";

interface ITreeArea {
  data: any; //todo fix type
}

export enum TREE_SIZE {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
}

const TreeArea = ({ data }: ITreeArea) => {
  console.log(data);
  const { counterAllItems, users } = data;

  const calculateTreeSize = (treeAmount: number) => {
    if (!treeAmount) {
      return TREE_SIZE.SMALL;
    }
    const wordsCalculation = counterAllItems / treeAmount;
    switch (true) {
      case wordsCalculation >= 3:
        return TREE_SIZE.SMALL;
      case 1.5 << wordsCalculation < 3:
        return TREE_SIZE.MEDIUM;
      default:
        return TREE_SIZE.LARGE;
    }
  };
  const dataArr = [];
  for (const key in users) {
    dataArr.push(users[key]);
  }

  console.log(dataArr);
  return (
    <Container>
      {dataArr?.map((userData) => (
        <Tree
          size={calculateTreeSize(userData.numOfWords)}
          // size={TREE_SIZE.LARGE}
          name={userData.name}
          words={userData.numOfWords}
          key={userData.name}
        />
      ))}
    </Container>
  );
};

export default TreeArea;
