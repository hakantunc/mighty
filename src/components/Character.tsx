import React from "react";

const characterSVG = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/ACC-L16832.svg';

const Character = () => {
  return (
    <div style={{position: "absolute"}}>
      <img src={characterSVG} alt="" />
    </div>
  );
};

export default Character;
