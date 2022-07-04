import { ReactElement } from 'react';

import withIcon from '../withIcon';

const Music = (): ReactElement => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 477.867 477.867"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path
            d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
			C477.726,107.033,370.834,0.141,238.933,0z M339.557,246.546c-1.654,3.318-4.343,6.008-7.662,7.662v0.085L195.362,322.56
			c-8.432,4.213-18.682,0.794-22.896-7.638c-1.198-2.397-1.815-5.043-1.8-7.722V170.667c-0.004-9.426,7.633-17.07,17.059-17.075
			c2.651-0.001,5.266,0.615,7.637,1.8l136.533,68.267C340.331,227.863,343.762,238.11,339.557,246.546z"
          />
        </g>
      </g>
    </svg>
  );
};

export default withIcon(Music);