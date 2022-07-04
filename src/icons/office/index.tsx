import { ReactElement } from 'react';

import withIcon from '../withIcon';

const Office = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512.000000 512.000000"
    >
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
        <path
          d="M1760 4561 l-1435 -559 -3 -1520 c-2 -1403 -1 -1520 14 -1526 9 -4
19 -4 22 -1 3 3 -1 5 -9 6 -8 0 197 71 456 158 l470 158 3 1281 2 1280 28 6
c15 3 434 73 932 156 498 83 917 153 933 156 l27 6 0 -1766 c0 -1695 -1 -1766
-18 -1766 -10 0 -638 72 -1396 160 -758 88 -1388 160 -1400 159 -11 0 618
-214 1398 -474 l1419 -474 701 210 c386 116 745 224 798 240 l98 30 0 2079 0
2079 -97 30 c-188 57 -1503 451 -1505 451 -2 -1 -649 -252 -1438 -559z"
        />
      </g>
    </svg>
  );
};

export default withIcon(Office);
