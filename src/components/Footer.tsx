import type { HTMLProps } from 'react';

import cx from '@/utils/cx';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { Logo } from '@/components/Logo';

export interface IAppFooter extends HTMLProps<HTMLDivElement> {}

export default function Footer({ className, ...props }: IAppFooter) {
  return (
    <footer
      className={cx('relative z-20 py-24 text-center', className)}
      {...props}
    >
      <Container className="max-w-screen-md">
        <div className="grid place-items-center">
          <Logo />

          <p className="mt-10 opacity-60">
            © {new Date().getFullYear()} RWChallenge, Санкт-Петербург.
          </p>

          <div className="mt-2 flex flex-col items-center gap-4 md:flex-row">
            <Button
              href="mailto:info@rwch.org"
              className="opacity-60 hover:opacity-100"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
