import React, { type PropsWithChildren } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import type {
  NavigationMenuContentProps,
  NavigationMenuLinkProps,
  NavigationMenuTriggerProps,
} from '@radix-ui/react-navigation-menu';
import { IconChevronDown } from '@tabler/icons-react';

import cx from '@/utils/cx';

export default function NavigationRoot({ children }: PropsWithChildren) {
  return (
    <NavigationMenu.Root className="relative z-50 col-span-4 flex w-full items-center justify-center">
      <NavigationMenu.List className="flex items-center">
        {children}

        <NavigationMenu.Indicator
          className={cx(
            'z-[1] flex h-[10px] items-end justify-center overflow-hidden',
            'data-[state=visible]:animate-fadeIn',
            'data-[state=visible]:animate-fadeIn',
            'data-[state=hidden]:animate-fadeOut',
            'transition-[width,transform_250ms_ease]',
          )}
        >
          <svg
            className="text-white"
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0001 10L11.4143 1.4142C10.6332 0.633156 9.36691 0.633157 8.58586 1.4142L0 10H20.0001Z"
              fill="currentColor"
            />
          </svg>
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute top-full right-0 left-20 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport
          className={cx(
            'relative mt-[7px] bg-white text-zinc-900',
            'origin-[top_center] overflow-hidden rounded-xl',
            'transition-[width,_height] duration-300',
            'data-[state=open]:animate-scaleIn',
            'data-[state=open]:animate-scaleIn',
            'data-[state=closed]:animate-scaleOut',
            'w-[var(--radix-navigation-menu-viewport-width)]',
            'h-[var(--radix-navigation-menu-viewport-height)]',
          )}
        />
      </div>
    </NavigationMenu.Root>
  );
}

export function NewNavigationTrigger({ children }: NavigationMenuTriggerProps) {
  return (
    <NavigationMenu.Trigger
      className={cx(
        'group flex items-center gap-0.5 select-none',
        'rounded-full px-3 py-2',
        'opacity-60 hover:bg-white/5 hover:opacity-100',
        'data-[state=open]:bg-white/5',
        'data-[state=open]:opacity-100',
      )}
    >
      {children}
      <IconChevronDown
        width={15}
        height={15}
        className={cx(
          'duration opacity-60 transition-transform ease-in',
          'group-data-[state=open]:-rotate-180',
        )}
        strokeWidth={1.5}
      />
    </NavigationMenu.Trigger>
  );
}

export function NewNavigationContent({
  children,
  ...props
}: NavigationMenuContentProps) {
  return (
    <NavigationMenu.Content
      className={cx(
        'data-[motion=from-start]:animate-enter-from-left',
        'data-[motion=from-end]:animate-enter-from-right',
        'data-[motion=to-start]:animate-exit-to-left',
        'data-[motion=to-end]:animate-exit-to-right',
        'absolute top-0 left-0 w-auto',
      )}
      {...props}
    >
      {children}
    </NavigationMenu.Content>
  );
}

interface ListItemProps extends NavigationMenuLinkProps {
  icon?: React.ReactNode;
  title1?: React.ReactNode;
}

const ListItem = React.forwardRef(
  (
    props: ListItemProps,
    forwardedRef: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const { children, className, title1, icon, ...otherProps } = props;

    return (
      <NavigationMenu.Link asChild {...otherProps}>
        <a
          className={cx(
            'flex items-center gap-5 rounded-xl p-5 select-none',
            'bg-black/5',
            'hover:bg-black/10',
            className,
          )}
          ref={forwardedRef}
          data-astro-prefetch
        >
          <div className="flex h-full w-10 shrink-0 items-center justify-center rounded-full bg-black/5">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold">{title1}</h4>
            <p className="opacity-80">{children}</p>
          </div>
        </a>
      </NavigationMenu.Link>
    );
  },
);

export { ListItem };
