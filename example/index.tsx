import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Squircle } from '../.';

const App = () => {
  return (
    <div>
      <Squircle>
        <div style={{ height: 64, backgroundColor: 'dodgerblue' }} />
      </Squircle>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
