import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {
  action$,
  collectRoutines,
  stateStreamRegistry,
  subscribeRoutine,
} from 'rxbeach';
import { routines } from './state/state$';
import { Subject } from 'rxjs';

stateStreamRegistry.startReducing(action$, module.hot?.data?.streamStates);

const error$ = new Subject<any>();

const startRoutines = (action$: any) => {
  subscribeRoutine(action$, collectRoutines(...[routines]), error$);
};

startRoutines(action$);

action$.subscribe(console.log, console.log, console.error);

const renderAppContainer = () => {
  ReactDOM.render(<App />, document.querySelector('#app-container'));
};

if (module.hot) {
  module.hot.accept('/App', renderAppContainer);
}

renderAppContainer();
