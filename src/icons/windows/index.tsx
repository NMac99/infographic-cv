import { ReactElement } from 'react';

import withIcon from '../withIcon';

const Windows = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <polygon points="0,80 0,240 224,240 224,52 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="256,48 256,240 512,240 512,16 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="256,272 256,464 512,496 512,272 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="0,272 0,432 224,460 224,272 		" />
        </g>
      </g>
    </svg>
  );
};

export default withIcon(Windows);
