import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  return (
    <div>
      {props.arr.map((obj, index) => (
        <Tile key={index} title={obj} />
      ))}
    </div>
  );
};
