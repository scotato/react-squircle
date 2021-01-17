import React from 'react';
import useMeasure from 'react-use-measure';
import { Mask } from '../Mask/Mask';
import { createSquirclePath } from '../../lib/squircle';

export interface SquircleProps {
  r1?: number;
  r2?: number;
  p1?: number;
  p2?: number;
}

interface SquircleShapeProps {
  width?: number;
  height?: number;
  r1?: number;
  r2?: number;
}

function SquircleShape(props: SquircleShapeProps) {
  const { width, height, r1, r2 } = props;
  const id = `squircle-${width}-${height}-${r1}-${r2}`;
  const SquirclePath = createSquirclePath(width, height, r1, r2);

  return (
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
  );
}

function Squircle(
  props: SquircleProps & React.HTMLAttributes<HTMLDivElement> & HTMLElement
) {
  const [ref, bounds] = useMeasure();
  const {
    r1 = 0.0586,
    r2 = 0.332,
    p1,
    p2,
    width = bounds.width,
    height = bounds.height,
  } = props;

  return (
    <Mask
      image={
        <SquircleShape
          width={width}
          height={height}
          r1={p1 ?? r1 * Math.min(width, height)}
          r2={p2 ?? r2 * Math.min(width, height)}
        />
      }
      ref={ref}
      {...props}
    />
  );
}

export default Squircle;
