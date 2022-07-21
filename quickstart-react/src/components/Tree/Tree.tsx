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

const sizeImg = (size: TREE_SIZE) => {
  switch (size) {
    case TREE_SIZE.SMALL:
      return 54;

    case TREE_SIZE.MEDIUM:
      return 72;

    default:
      return 88;
  }
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Tree = ({ size, name, numOfWords }: ITree) => {
  const paperSaved = Math.ceil(numOfWords / 250);
  const newName = name.split(" ")[0];
  const formatName = newName.charAt(0).toUpperCase() + newName.slice(1);
  const message = `This is ${formatName}'s <br /> tree who saved ${paperSaved} papers!`;
  return (
    <div
      data-tip={`This is ${formatName}'s tree who saved ${paperSaved} papers!`}
      style={{
        display: "block",
        marginTop: getRandomInt(170),
        marginLeft: getRandomInt(30),
      }}
    >
      <a
        data-for="main"
        // data-tip=`This is ${formatName}'s <br/> tree who saved ${paperSaved} papers!`
        data-tip={message}
        data-iscapture="true"
      ></a>
      <ReactTooltip place="top" />

      {/* <ReactTooltip>
        {`This is ${newName}'s tree`}
        <br />
        {`who saved ${paperSaved} papers!`}
      </ReactTooltip> */}
      <img src={getUrlBySize(size)} style={{ width: sizeImg(size) }} />
    </div>
  );
};

export default Tree;
