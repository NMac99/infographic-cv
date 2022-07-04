import React, { CSSProperties, ReactElement } from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

/* eslint-disable */
export default function withIcon(Child: any) {
  /* eslint-enable */
  return (props: Props): ReactElement => {
    return (
      <span {...props} className={`icon ${props?.className || ''}`}>
        <Child width="1em" height="1em" />
      </span>
    );
  };
}
