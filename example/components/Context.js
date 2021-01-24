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
    case 'setR1':
      return {
        ...state,
        R1: action.payload || initialState.R1,
      };
    case 'setR2':
      return {
        ...state,
        R2: action.payload || initialState.R2,
      };
    case 'setC':
      return {
        ...state,
        C: action.payload || initialState.C,
      };
    default:
      throw new Error();
  }
}

const initialState = {
  P1: 4,
  P2: 8,
  R1: 0.0586,
  R2: 0.332,
  C: 5,
};

const Context = createContext([{}, () => {}]);

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export { Context, ContextProvider };
