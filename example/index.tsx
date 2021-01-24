import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Squircle, SquircleMask } from '../.';
import { ContextProvider, Context } from './components/Context';

interface SquircleRepeaterProps {
  r1?: number;
  r2?: number;
  p1?: number;
  p2?: number;
  c?: number;
  width?: number;
  height: number;
  count: number;
}

const SquircleRepeater = (props: SquircleRepeaterProps) => {
  const { count = 1, ...rest } = props;
  return (
    <div className="squircle-repeater">
      {Array.from({ length: count }, (_, i) => (
        <Squircle key={i} {...rest} />
      ))}
    </div>
  );
};

const ExampleR = () => {
  const { state } = React.useContext(Context);
  const { R1, R2 } = state;

  return (
    <div className="dashboard-column dashboard-r">
      <h1>R</h1>
      <SquircleRepeater r1={R1} r2={R2} height={384} count={1} />
      <SquircleRepeater r1={R1} r2={R2} height={256} count={2} />
      <SquircleRepeater r1={R1} r2={R2} height={128} count={4} />
      <SquircleRepeater r1={R1} r2={R2} height={64} count={8} />
      <SquircleRepeater r1={R1} r2={R2} height={48} width={48} count={16} />
      <SquircleRepeater r1={R1} r2={R2} height={16} width={16} count={32} />
      <SquircleControlsR />
    </div>
  );
};

const ExampleP = () => {
  const { state } = React.useContext(Context);
  const { P1, P2 } = state;

  return (
    <div className="dashboard-column dashboard-p">
      <h1>P</h1>
      <SquircleRepeater p1={P1} p2={P2} height={384} count={1} />
      <SquircleRepeater p1={P1} p2={P2} height={256} count={2} />
      <SquircleRepeater p1={P1} p2={P2} height={128} count={4} />
      <SquircleRepeater p1={P1} p2={P2} height={64} count={8} />
      <SquircleRepeater p1={P1} p2={P2} height={48} width={48} count={16} />
      <SquircleRepeater p1={P1} p2={P2} height={16} width={16} count={32} />
      <SquircleControlsP />
    </div>
  );
};

const ExampleC = () => {
  const { state } = React.useContext(Context);
  const { C } = state;

  return (
    <div className="dashboard-column dashboard-c">
      <h1>C</h1>
      <SquircleRepeater c={C} height={384} count={1} />
      <SquircleRepeater c={C} height={256} count={2} />
      <SquircleRepeater c={C} height={128} count={4} />
      <SquircleRepeater c={C} height={64} count={8} />
      <SquircleRepeater c={C} height={48} width={48} count={16} />
      <SquircleRepeater c={C} height={16} width={16} count={32} />
      <SquircleControlsC />
    </div>
  );
};

const ExampleMask = () => {
  const { state } = React.useContext(Context);
  const { C } = state;

  return (
    <div className="dashboard-column dashboard-mask">
      <h1>Mask</h1>
      <SquircleMask c={C}>
        <SquircleMask c={C}>
          <SquircleMask c={C}>
            <SquircleMask c={C}>
              <SquircleMask c={C}>
                <SquircleMask c={C}>
                  <SquircleMask c={C}>
                    <SquircleMask c={C}>
                      <SquircleMask c={C}>
                        <SquircleMask c={C} />
                      </SquircleMask>
                    </SquircleMask>
                  </SquircleMask>
                </SquircleMask>
              </SquircleMask>
            </SquircleMask>
          </SquircleMask>
        </SquircleMask>
      </SquircleMask>
    </div>
  );
};

const SquircleControlsR = () => {
  const { state, dispatch } = React.useContext(Context);
  const setValue = type => e => dispatch({ type, payload: e.target.value });

  return (
    <div className="squircle-controls">
      <span>R1: {Number.parseFloat(state.R1).toFixed(3)}</span>
      <input
        type="range"
        min="0"
        max="0.5"
        step=".001"
        value={state.R1}
        onChange={setValue('setR1')}
      />
      <span>R2: {Number.parseFloat(state.R2).toFixed(3)}</span>
      <input
        type="range"
        min="0"
        max="0.5"
        step=".001"
        value={state.R2}
        onChange={setValue('setR2')}
      />
    </div>
  );
};

const SquircleControlsP = () => {
  const { state, dispatch } = React.useContext(Context);
  const setValue = type => e => dispatch({ type, payload: e.target.value });

  return (
    <div className="squircle-controls">
      <span>P1: {state.P1}</span>
      <input
        type="range"
        min="0"
        max="64"
        step="1"
        value={state.P1}
        onChange={setValue('setP1')}
      />
      <span>P2: {state.P2}</span>
      <input
        type="range"
        min="0"
        max="64"
        step="1"
        value={state.P2}
        onChange={setValue('setP2')}
      />
    </div>
  );
};

const SquircleControlsC = () => {
  const { state, dispatch } = React.useContext(Context);
  const setValue = type => e => dispatch({ type, payload: e.target.value });

  return (
    <div className="squircle-controls">
      <span>C: {state.C}</span>
      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={state.C}
        onChange={setValue('setC')}
      />
    </div>
  );
};

const App = () => {
  return (
    <ContextProvider>
      <div className="dashboard">
        <ExampleR />
        <ExampleP />
        <ExampleC />
        <ExampleMask />
      </div>
    </ContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
