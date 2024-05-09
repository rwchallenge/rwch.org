import { type HTMLProps } from 'react';

export function LogoIcon({
  lightBg,
  ...props
}: HTMLProps<SVGSVGElement> & {
  lightBg?: boolean;
}) {
  const top = lightBg ? "fill-emerald-400" : "fill-emerald-300";
  const bottom = lightBg ? "fill-emerald-500" : "fill-emerald-400";

  return (
    <svg
      height="38"
      viewBox="0 0 354 472"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M353.974 59.421C275.869 -18.6835 149.236 -18.6835 71.1315 59.421C-6.97352 137.526 -6.97352 264.159 71.1315 342.264L106.486 306.909C47.9085 248.33 47.9085 153.355 106.486 94.777C165.065 36.198 260.04 36.198 318.618 94.777L353.974 59.421Z"
        className={top}
      />
      <path
        d="M283.264 130.132C244.212 91.08 180.894 91.08 141.842 130.132C102.789 169.185 102.789 232.501 141.842 271.553L177.197 236.198C157.671 216.672 157.671 185.014 177.197 165.487C196.723 145.961 228.381 145.961 247.908 165.487L283.264 130.132Z"
        className={top}
      />
      <path
        d="M0.421875 412.975C78.5269 491.079 205.16 491.079 283.265 412.975C361.369 334.87 361.369 208.237 283.265 130.132L247.909 165.487C306.488 224.066 306.488 319.041 247.909 377.619C189.331 436.198 94.3559 436.198 35.7769 377.619L0.421875 412.975Z"
        className={bottom}
      />
      <path
        d="M71.1328 342.264C110.185 381.316 173.501 381.316 212.554 342.264C251.606 303.212 251.606 239.895 212.554 200.843L177.199 236.198C196.725 255.724 196.725 287.382 177.199 306.909C157.672 326.435 126.014 326.435 106.488 306.909L71.1328 342.264Z"
        className={bottom}
      />
    </svg>
  );
}

export function Logo({
  lightBg,
  ...props
}: HTMLProps<SVGSVGElement> & {
  lightBg?: boolean;
}) {
  const top = lightBg ? "fill-emerald-400" : "fill-emerald-300";
  const bottom = lightBg ? "fill-emerald-500" : "fill-emerald-400";

  return (
    <svg
      height="38"
      viewBox="0 0 259.05 69.662"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>RWChallenge</title>
      <g transform="translate(-77.947 33.407)">
        <g transform="translate(4.6538 -.74645)">
          <text
            x="178.52498"
            y="-9.1375799"
            fontSize="30px"
            strokeWidth=".32"
            className={top}
          >
            <tspan x="178" y="-5">
              Real World
            </tspan>
            <tspan x="178" y="30">
              Challenge
            </tspan>
          </text>
          <g transform="matrix(.47602 0 0 .47602 52.03 47.723)" aria-label="V">
            <path
              transform="translate(-178.22 -431.43)"
              d="m238.83 345.7v57h-15.938v-137.06h37.594q25.219 0 37.219 9.6562 12.094 9.6562 12.094 29.062 0 27.188-27.562 36.75l37.219 61.594h-18.844l-33.188-57zm0-13.688h21.844q16.875 0 24.75-6.6562 7.875-6.75 7.875-20.156 0-13.594-8.0625-19.594-7.9688-6-25.688-6h-20.719z"
              className={bottom}
            />
            <path
              transform="translate(-63.264 -431.43)"
              d="m301.18 265.64h17.156l-49.406 137.06h-15.75l-49.125-137.06h16.875l31.5 88.688q5.4375 15.281 8.625 29.719 3.375-15.188 8.8125-30.281z"
              className={bottom}
            />
            <path
              d="m173.32-165.79h17.156l-49.406 137.06h-15.75l6.5357-19.549c3.1429-10.125 6.5268-19.326 10.152-29.388z"
              className={bottom}
            />
          </g>
        </g>
      </g>
   </svg>
  );
}
