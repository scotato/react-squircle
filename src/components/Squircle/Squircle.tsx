import React from 'react';
import useMeasure from 'react-use-measure';
import { Mask } from '../Mask/Mask';
import { createSquirclePath } from '../../lib/squircle';

export interface SquircleProps {
  width?: number;
  height?: number;
  r1?: number;
  r2?: number;
  p1?: number;
  p2?: number;
  c?: number;
}

export function Squircle(
  props: SquircleProps & React.HTMLAttributes<HTMLDivElement>
) {
  const [ref, bounds] = useMeasure();
  const {
    r1,
    r2,
    p1,
    p2,
    c,
    width = bounds.width || 64,
    height = bounds.height || 64,
  } = props;
  const SquirclePath = createSquirclePath({
    width,
    height,
    r1,
    r2,
    p1,
    p2,
    c,
  });

  return (
    <div ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={props.className}
      >
        <path fill="#000" d={SquirclePath} />
      </svg>
    </div>
  );
}

export function SquircleMask(
  props: SquircleProps & React.HTMLAttributes<HTMLDivElement>
) {
  const [ref, bounds] = useMeasure();
  const {
    r1,
    r2,
    p1,
    p2,
    c,
    width = bounds.width,
    height = bounds.height,
  } = props;

  const id = `squircle-${width}-${height}-${r1}-${r2}`;
  const SquirclePath = createSquirclePath({ width, height, r1, r2, p1, p2, c });

  return (
    <Mask
      image={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <defs>
            <clipPath id={id}>
              <path fill="#000" d={SquirclePath} />
            </clipPath>
          </defs>
          <g clipPath={`url(#${id})`}>
            <rect width={width} height={height} fill="#000" />
          </g>
        </svg>
      }
      ref={ref}
      {...props}
    />
  );
}

export default SquircleMask;
