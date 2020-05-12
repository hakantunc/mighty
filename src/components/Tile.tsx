import React from 'react';

import './Tile.css';
import Character from './Character';

interface TileProps {
  character: boolean;
  position: {
    row: number,
    col: number
  }
}

const Tile = (props: TileProps) => (
  <div className="tile">
    <div style={{ float: 'left' }}>
      {`(${props.position.col}, ${props.position.row})`}
    </div>
    {props.character ? <Character /> : undefined}
  </div>
);

export default Tile;
