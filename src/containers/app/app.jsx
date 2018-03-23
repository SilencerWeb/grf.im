// @flow
import * as React from 'react';

import { Header } from 'components/header/header';

type props = {};

type state = {};

class _App extends React.Component<props, state> {
  state = {};

  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export const App = _App;