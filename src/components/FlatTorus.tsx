import React from "react";
import { connect, ConnectedProps } from "react-redux";

import Tile from "./Tile";
import { RootState } from "../store";

const FlatTorus = (props: PropsFromRedux) => {
  const n = 3;
  const row = [];
  for (let i = 0; i < n; i++) {
    row.push(<Tile key={i}/>);
  }
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push(<div key={i} className="row">{row}</div>);
  }
  return (
    <div>
      {board}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return { value: state.board };
};
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(FlatTorus);
