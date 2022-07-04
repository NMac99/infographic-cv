import { ReactElement } from 'react';

import withIcon from '../withIcon';

const VPN = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0, 0, 400,400"
    >
      <path d="M9.848 1.501 C 4.167 5.247,4.600 -4.346,4.912 110.664 C 5.222 225.221,4.820 216.159,10.531 237.123 C 21.053 275.750,45.261 310.399,77.734 333.311 C 95.250 345.669,194.547 400.000,199.618 400.000 C 204.697 400.000,303.930 345.696,321.484 333.311 C 353.958 310.399,378.166 275.750,388.688 237.123 C 394.396 216.169,393.994 225.173,394.327 110.938 C 394.660 -3.472,395.040 5.015,389.423 1.544 C 385.560 -0.844,13.468 -0.886,9.848 1.501 M82.828 119.539 C 86.641 121.485,86.548 121.303,97.740 148.420 C 102.791 160.656,107.211 170.762,107.563 170.877 C 107.915 170.992,112.408 160.835,117.548 148.304 C 122.688 135.774,127.617 124.438,128.501 123.113 C 134.478 114.157,148.424 118.450,148.435 129.248 C 148.438 132.803,119.115 204.960,115.999 209.065 C 112.226 214.034,104.300 214.273,99.781 209.552 C 97.412 207.078,66.406 132.514,66.406 129.292 C 66.406 121.190,75.489 115.795,82.828 119.539 M222.068 120.186 C 242.904 128.537,246.888 156.793,229.175 170.594 C 222.185 176.039,218.989 176.737,199.072 177.162 L 181.346 177.541 181.103 191.450 C 180.882 204.063,180.709 205.560,179.249 207.514 C 173.834 214.758,165.071 214.933,160.367 207.892 L 158.594 205.238 158.594 165.625 L 158.594 126.012 160.367 123.358 C 163.948 117.998,164.613 117.890,192.578 118.152 C 216.568 118.377,217.759 118.459,222.068 120.186 M267.622 119.879 C 268.629 120.539,278.290 131.803,289.091 144.910 C 299.891 158.017,309.049 168.939,309.442 169.182 C 309.867 169.445,310.156 161.042,310.156 148.452 C 310.156 128.776,310.267 127.064,311.729 124.198 C 315.794 116.231,327.175 116.231,331.239 124.198 C 332.752 127.163,332.813 128.738,332.813 165.347 C 332.813 209.046,332.848 208.796,326.255 211.790 C 318.288 215.408,317.587 214.852,294.075 186.268 L 273.828 161.654 273.438 182.975 C 273.008 206.424,272.799 207.458,267.716 211.246 C 262.821 214.896,255.450 212.886,251.953 206.950 C 249.747 203.204,249.497 128.581,251.678 124.608 C 255.039 118.482,262.234 116.348,267.622 119.879 M181.250 147.266 L 181.250 153.906 197.911 153.906 C 216.798 153.906,217.999 153.528,217.944 147.606 C 217.886 141.339,215.735 140.625,196.926 140.625 L 181.250 140.625 181.250 147.266 " />
    </svg>
  );
};

export default withIcon(VPN);
