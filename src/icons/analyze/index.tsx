import { ReactElement } from 'react';

import withIcon from '../withIcon';

const Analyze = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      viewBox="0 0 121.7 122.88"
    >
      <path d="M17.67,53.08h8.22l6.82-13.82L45.14,57.17l12.7-24.75,13.26,26,4.54-4.16,3-1.18H89.56v.53a35.81,35.81,0,0,1-1,8.35H80.35L68.5,72.84l-10.7-21L46.28,74.33,34,56.65,31.39,62H18.63a36.35,36.35,0,0,1-1-8.35v-.53ZM53.61,0A53.63,53.63,0,0,1,98.49,83l23.21,25.29-16,14.63L83.31,98.26A53.62,53.62,0,1,1,53.61,0Zm29.6,24a41.81,41.81,0,1,0,12.28,29.6A41.77,41.77,0,0,0,83.21,24Z" />
    </svg>
  );
};

export default withIcon(Analyze);
