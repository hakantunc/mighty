import React from 'react';
import {
  ConnectedProps,
  connect,
} from 'react-redux';

import { RootState } from '../store';
import { increment, reset } from './counterSlice';

const Counter = (props: PropsFromRedux) => (
  <div style={{ textAlign: 'center' }}>
    <div>
      {props.value}
    </div>
    <div>
      <button type="button" style={{ margin: 10 }} onClick={props.increment}>
        Mighty
      </button>
      <button type="button" style={{ margin: 10 }} onClick={props.reset}>
        Reset
      </button>
    </div>
  </div>
);

const mapStateToProps = (state: RootState) => ({ value: state.counter });
const mapDispatchToProps = {
  increment: () => increment(),
  reset: () => reset(),
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Counter);
