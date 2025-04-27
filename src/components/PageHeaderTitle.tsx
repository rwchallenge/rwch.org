import type { HTMLProps, ReactNode } from 'react';

import cx from '@/utils/cx';

type IPageHeaderTitle = HTMLProps<HTMLHeadingElement> & {
  children: ReactNode;
  as?: 'h1' | 'h2';
};

export default function PageHeaderTitle({
  as = 'h1',
  children,
  className,
  ...props
}: IPageHeaderTitle) {
  const Tag = as;

  const size = {
    h1: 'text-4xl md:text-6xl',
    h2: 'text-3xl md:text-5xl',
  };

  return (
    <Tag
      className={cx(
        'font-display leading-title! font-bold',
        size[as],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
