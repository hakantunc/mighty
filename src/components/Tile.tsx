import React from "react";

import './Tile.css';

const characterSVG = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/ACC-L16832.svg';

const Tile = () => {
  return (
    <div className="tile">
      <img src={characterSVG} alt="" />
    </div>
  );
};

export default Tile;
