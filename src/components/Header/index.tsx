import { type HTMLProps, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import cx from '@/utils/cx';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { Logo } from '@/components/Logo';
// import ThemeSwitcher from '@/components/ThemeSwitcher';
import Navigation from './Nav';

export default function Header({
  className,
  ...props
}: HTMLProps<HTMLElement>) {
  const [fix, setFix] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  });

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 hidden bg-zinc-950/80 backdrop-blur-sm transition will-change-auto md:block',
        className,
      )}
      {...props}
    >
      <Container>
        <div
          className={cx(
            'flex items-center border-b border-b-white/5 py-5 md:grid md:grid-cols-6',
          )}
        >
          <div className="flex">
            <a href="/" data-astro-prefetch>
              <Logo />
            </a>
          </div>

          <Navigation />

          <div className="flex justify-end">
            {/* <ThemeSwitcher /> */}
            <Button
              target="_self"
              type="button"
              hideIcon
              href="/rwchallenge"
              className={cx('', fix ? 'bg-emerald-500' : '')}
            >
              #rwchallenge
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
