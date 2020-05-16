import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Tile from './Tile';
import { RootState } from '../store';

const FlatTorus = (props: PropsFromRedux) => {
  const n = 3;
  const { height, width, position } = props;
  const board = [];
  const rowStart = position.row - (n - 1) / 2;
  const rowEnd = rowStart + n;
  for (let j = rowStart; j < rowEnd; j += 1) {
    const row = [];
    const colStart = position.col - (n - 1) / 2;
    const colEnd = colStart + n;
    for (let i = colStart; i < colEnd; i += 1) {
      const isCharacter = j === position.row && i === position.col;
      const jr = (j + height) % height;
      const ir = (i + width) % width;
      row.push(<Tile
        key={i}
        character={isCharacter}
        position={{ row: jr, col: ir }}
      />);
    }
    board.push(<div key={j} className="row">{row}</div>);
  }
  return (
    <div>
      <div>{board}</div>
      <p style={{ width: 360 }}>
        Use the arrow <kbd>↑</kbd> <kbd>↓</kbd> <kbd>→</kbd>
        {' '}<kbd>←</kbd> keys to move around after selecting the
        board. It consumes
        <span className="badge badge-pill badge-dark">
          might
        </span>, so boost it a little bit.
      </p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  ...state.board,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FlatTorus);
