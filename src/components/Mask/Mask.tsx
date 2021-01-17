import React from 'react';
import svgToMiniDataURI from 'mini-svg-data-uri';
import { renderToStaticMarkup } from 'react-dom/server';

export interface MaskProps {
  image: JSX.Element;
}

export const Mask = React.forwardRef<
  HTMLDivElement,
  MaskProps & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { image, style, children, ...rest } = props;
  const svg = renderToStaticMarkup(props.image);
  const dataUri = svgToMiniDataURI(svg);

  return (
    <div
      {...rest}
      ref={ref}
      style={{
        ...style,
        maskImage: `url("${dataUri}")`,
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        WebkitMaskImage: `url("${dataUri}")`,
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
});
