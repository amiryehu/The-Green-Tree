import React from "react";
import { Tree } from "../../halpers/consts";
import Tooltip from "@mui/material/Tooltip";
import { TreeStyle } from "./Tree-styles";

// export interface Tree {
//     imgUrl: string;
//     color: string;
//     height: string;
//     width: string;
//   }

const Tree = (tree: Tree) => {
  const text = "tooltip";
  return (
    <Tooltip title={text} arrow placement="top" followCursor>
      <TreeStyle iamgeUrl={tree.iamgeUrl}>Tree</TreeStyle>
    </Tooltip>
  );
};

export default Tree;
