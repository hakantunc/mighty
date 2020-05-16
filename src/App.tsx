import React from 'react';
import './App.css';

import { ConnectedProps, connect } from 'react-redux';
import Counter from './components/Counter';
import FlatTorus from './components/FlatTorus';
import { RootState } from './store';
import { decrement } from './components/counterSlice';
import {
  goNorth, goSouth, goWest, goEast,
} from './components/flatTorusSlice';

const App = (props: PropsFromRedux) => {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.resource === 0) {
      return;
    }
    props.useEnergy();
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
  return (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="App container"
      id="app"
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onKeyDown={onKeyDown}
      onLoad={() => document.getElementById('app')?.focus()}
    >
      <div className="row justify-content-around">
        <h1>Hello There!</h1>
      </div>
      <div className="row justify-content-around">
        <FlatTorus />
      </div>
      <div className="row justify-content-around">
        <Counter />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  ...state.board,
  resource: state.counter,
});
const mapDispatchToProps = {
  goNorth: () => goNorth(),
  goSouth: () => goSouth(),
  goWest: () => goWest(),
  goEast: () => goEast(),
  useEnergy: () => decrement(),
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
