import type { HTMLProps, ReactNode } from 'react';

import cx from "@/utils/cx";
import Button from "@/components/Button";

export default function NavMobile({ hidden }: HTMLProps<HTMLDivElement>) {
  return (
    <nav
      className={cx(
        "absolute inset-x-0 top-full z-10 mt-px flex-col p-6",
        "bg-zinc-950 shadow-2xl",
        hidden ? "flex" : "hidden",
      )}
    >
      {/* items */}
      <div className="flex flex-col divide-y divide-white/5">
        {NavItems.map((item) => {
          return (
            <NavLink key={item.href} href={item.href}>
              {item.name}
              {item.children}
            </NavLink>
          );
        })}
      </div>

      <Button
        type="button"
        target="_self"
        hideIcon
        href="/rwchallenge"
        className="my-6 justify-center bg-emerald-400 py-3 font-display text-lg font-medium text-zinc-950"
      >
        #rwchallenge
      </Button>
    </nav>
  );
}

function NavLink({
  href,
  className,
  children,
  ...props
}: HTMLProps<HTMLAnchorElement> & { className?: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={cx(
        "flex items-center gap-2 py-4 font-display text-lg font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

const NavItems: {
  name: string;
  href: string;
  children?: ReactNode;
}[] = [
  {
    name: "О нас",
    href: "/about",
  },
  {
    name: "Активности 2024",
    href: "/actions/2024",
  },
  {
    name: "Активности 2023",
    href: "/actions/2023",
  },
  {
    name: "Активности 2022",
    href: "/actions/2022",
  },
  {
    name: "Активности 2021",
    href: "/actions/2021",
  },
  {
    name: "Команда футбольная",
    href: "/teams/football",
  },
  {
    name: "Команда волейбольная",
    href: "/teams/volleyball",
  },
  {
    name: "Ресурсы",
    href: "/resources",
  },
  {
    name: "Поддержка",
    href: "/support",
  },
  {
    name: "Сообщество",
    href: "/#community",
  },
];
