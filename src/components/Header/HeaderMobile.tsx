import { type HTMLProps, useState } from 'react';

import cx from '@/utils/cx';
import Container from '@/components/Container';
import Icon, { ICON_NAMES } from '@/components/Icon';
import { Logo } from '@/components/Logo';
import NavMobile from './NavMobile';

export interface IAppHeader extends HTMLProps<HTMLHeadElement> {}

export default function HeaderMobile({ className, ...props }: IAppHeader) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 py-4 md:hidden",
        "border-b border-b-white/5 bg-zinc-950",
        className,
      )}
      {...props}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex">
            <a href="/" data-astro-prefetch>
              <Logo height={30} />
            </a>
          </div>

          <button
            type="button"
            className="flex items-center justify-center p-2 opacity-60"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? (
              <Icon
                title="Collapse menu"
                icon={ICON_NAMES.Cancel}
                className="text-3xl"
              />
            ) : (
              <Icon
                title="Expand menu"
                icon={ICON_NAMES.Menu}
                className="text-3xl"
              />
            )}
          </button>

          <NavMobile hidden={showMenu} />
        </div>
      </Container>
    </header>
  );
}
