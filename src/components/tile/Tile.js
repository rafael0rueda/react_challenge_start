import React from "react";

export const Tile = (props) => {
  // Array with the value of the object
  const items = Object.values(props.title);
  //Array with key names of the object
  const keysLabel = Object.keys(props.title);
  
  return (
    <div className="tile-container">
      {items.map((item, index) => (
        <p key={index} >{keysLabel[index]}: {item}</p>
        
      ))
      }
    </div>
  );
};
