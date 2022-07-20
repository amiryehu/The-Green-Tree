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

  return (
    <Container>
      {users?.map((userData: any, index: number) => (
        <Tree
          size={calculateTreeSize(userData.numOfWords)}
          name={userData.name}
          numOfWords={userData.numOfWords}
          key={index}
        />
      ))}
    </Container>
  );
};

export default TreeArea;
