import React, { createContext, useMemo, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'setP1':
      return {
        ...state,
        P1: action.payload || initialState.P1,
      };
    case 'setP2':
      return {
        ...state,
        P2: action.payload || initialState.P2,
      };
    default:
      throw new Error();
  }
}

const initialState = {
  P1: 4,
  P2: 8,
};

export { reducer, initialState };

const Context = createContext([{}, () => {}]);

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export { Context, ContextProvider };
