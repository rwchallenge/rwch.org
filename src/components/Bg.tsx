import { type HTMLProps } from 'react';

import cx from '@/utils/cx';

export default function Bg({ className }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cx(
        'absolute top-0 left-1/2 -z-10 -translate-x-1/2',
        'h-[200px] w-4/5 md:h-[400px]',
        'rounded-[100%] bg-emerald-500 opacity-5 blur-[90px]',
        'pointer-events-none',
        className,
      )}
    />
  );
}
