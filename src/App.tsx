import React from 'react';
import { dispatchAction } from 'rxbeach';
import { connect } from 'rxbeach/react';
import Child from './Child';
import Button from './components/Button';
import {
  StreamState,
  resetCounter,
  state$,
  updateCounter,
} from './state/state$';

const App = ({ count }: StreamState) => {
  return (
    <div>
      {count}
      <Button onClick={() => dispatchAction(updateCounter(count + 1))}>
        💯
      </Button>

      <Button onClick={() => dispatchAction(resetCounter())}>reset</Button>
      <Child />
    </div>
  );
};

export default connect(App, state$);
