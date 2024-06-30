import type { HTMLProps } from 'react';

import cx from '@/utils/cx';

type IPageHeaderDesc = HTMLProps<HTMLParagraphElement> & object;

export default function PageHeaderDesc({
  children,
  className,
  ...props
}: IPageHeaderDesc) {
  return (
    <p className={cx('text-lg opacity-60 md:text-2xl', className)} {...props}>
      {children}
    </p>
  );
}
