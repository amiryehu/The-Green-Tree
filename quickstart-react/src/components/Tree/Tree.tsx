import React from "react";
import ReactTooltip from "react-tooltip";
import { TREE_SIZE } from "../TreeArea/TreeArea";

import smallTreeUrl from "../../image/smallTree.png";
import mediumTreeUrl from "../../image/mediumTree.png";
import largeTreeUrl from "../../image/largeTree.png";

interface ITree {
  size: TREE_SIZE;
  name: string;
  numOfWords: number;
}

const getUrlBySize = (size: TREE_SIZE) => {
  switch (size) {
    case TREE_SIZE.SMALL:
      return smallTreeUrl;

    case TREE_SIZE.MEDIUM:
      return mediumTreeUrl;

    default:
      return largeTreeUrl;
  }
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Tree = ({ size, name, numOfWords }: ITree) => {
  const text = `This is ${name}'s tree - who wrote ${numOfWords} words`;
  return (
    <div>
      <div data-tip={text} style={{ marginTop: getRandomInt(170) }}>
        <ReactTooltip />
        <img src={getUrlBySize(size)} style={{ width: 50 }} />
      </div>
    </div>
  );
};

export default Tree;
