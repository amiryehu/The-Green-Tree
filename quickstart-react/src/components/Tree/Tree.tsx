import React from "react";
// import { Tree } from "../../halpers/consts";
import Tooltip from "@mui/material/Tooltip";
import { TreeStyle } from "./Tree-styles";
import { TREE_SIZE } from "../TreeArea/TreeArea";

import smallTreeUrl from "../../image/smallTree.png";
import mediumTreeUrl from "../../image/mediumTree.png";
import largeTreeUrl from "../../image/largeTree.png";

interface ITree {
  size: TREE_SIZE;
  name: string;
  words: number;
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

const Tree = ({ size, name, words }: ITree) => {
  const text = `This is ${name}'s tree - who wrote ${words} words`;
  return (
    <Tooltip title={text} arrow placement="top" followCursor>
      <TreeStyle iamgeUrl={getUrlBySize(size)} />
      {/* <div>tree</div> */}
    </Tooltip>
  );
};

export default Tree;
