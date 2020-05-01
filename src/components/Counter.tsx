import React from "react";
import {
  ConnectedProps,
  connect
} from "react-redux";

import { RootState } from "../store";
import { increment } from "./counterSlice";

const Counter = (props: PropsFromRedux) => {
  return (
    <div style={{textAlign: "center"}}>
      <div>
        {props.value}
      </div>
      <div>
        <button onClick={props.increment}>Mighty</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {value: state};
};
const mapDispatchToProps = {
  increment: () => increment()
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Counter);
