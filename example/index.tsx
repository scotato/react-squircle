import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContextProvider } from './components/Context';
import AppSkeleton from './components/AppSkeleton';

const App = () => {
  return (
    <ContextProvider>
      <AppSkeleton />
    </ContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
