import React from 'react';
import { connect } from 'rxbeach/react';
import { StreamState, state$ } from './state/state$';

const Child = ({ count }: StreamState) => {
  return <div>{count}</div>;
};

export default connect(Child, state$);
