import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Tile from './Tile';
import { RootState } from '../store';
import {
  goWest, goNorth, goSouth, goEast,
} from './flatTorusSlice';

const FlatTorus = (props: PropsFromRedux) => {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowUp':
        props.goNorth();
        break;
      case 'ArrowDown':
        props.goSouth();
        break;
      case 'ArrowLeft':
        props.goWest();
        break;
      case 'ArrowRight':
        props.goEast();
        break;
      default:
        break;
    }
  };

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
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div>{board}</div>
      <p style={{ width: 360 }}>
        Use the arrow
        {' '}
        <kbd>↑</kbd>
        {' '}
        <kbd>↓</kbd>
        {' '}
        <kbd>→</kbd>
        {' '}
        <kbd>←</kbd>
        {' '}
        keys
        to move around after selecting the board.
      </p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ ...state.board });
const mapDispatchToProps = {
  goNorth: () => goNorth(),
  goSouth: () => goSouth(),
  goWest: () => goWest(),
  goEast: () => goEast(),
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FlatTorus);
