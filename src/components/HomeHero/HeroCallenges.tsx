import {
  Children,
  cloneElement,
  type HTMLProps,
  type ReactElement,
} from 'react';

import cx from '@/utils/cx';
import Button, { type IButton } from '@/components/Button';
import { Challenge } from './types';

export default function HomeHeroChallenges({
  activeChallenge,
  setActiveChallenge,
}: {
  activeChallenge?: Challenge;
  setActiveChallenge: (сhallenge?: Challenge) => void;
}) {
  return (
    <div
      className="mt-8 grid gap-2 md:mt-16 md:grid-cols-2 xl:grid-cols-4"
      onMouseLeave={() => setActiveChallenge(undefined)}
    >
      <HomeHeroChallenge
        href={`/actions/${new Date().getFullYear()}`}
        activeChallenge={activeChallenge}
        onMouseEnter={() => setActiveChallenge(Challenge.PLAY)}
      >
        <HeroChallengeTitle>
          <span>Участвовать</span>
        </HeroChallengeTitle>
        <HeroChallengeDesc>в существующих активностях</HeroChallengeDesc>
        <HeroChallengeCta
          className={cx(
            activeChallenge === Challenge.PLAY && '!bg-red-500 !text-white',
          )}
        >
          Принять вызов
        </HeroChallengeCta>
      </HomeHeroChallenge>

      <HomeHeroChallenge
        href={`/actions/${new Date().getFullYear()}`}
        activeChallenge={activeChallenge}
        onMouseEnter={() => setActiveChallenge(Challenge.SHARE)}
      >
        <HeroChallengeTitle>
          <span>Делиться</span>
        </HeroChallengeTitle>
        <HeroChallengeDesc>
          информацией о проведенных и плановых активностях
        </HeroChallengeDesc>
        <HeroChallengeCta
          className={cx(
            activeChallenge === Challenge.SHARE && '!bg-blue-500 !text-white',
          )}
        >
          Вдохновить(ся)
        </HeroChallengeCta>
      </HomeHeroChallenge>

      <HomeHeroChallenge
        href={`/actions/${new Date().getFullYear()}`}
        activeChallenge={activeChallenge}
        onMouseEnter={() => setActiveChallenge(Challenge.CREATE)}
      >
        <HeroChallengeTitle>
          <span>Создавать</span>
        </HeroChallengeTitle>
        <HeroChallengeDesc>активности и площадки для них</HeroChallengeDesc>
        <HeroChallengeCta
          className={cx(
            activeChallenge === Challenge.CREATE &&
              '!bg-orange-500 !text-white',
          )}
        >
          Бросить вызов
        </HeroChallengeCta>
      </HomeHeroChallenge>

      <HomeHeroChallenge
        href="/support"
        activeChallenge={activeChallenge}
        onMouseEnter={() => setActiveChallenge(Challenge.SUPPORT)}
      >
        <HeroChallengeTitle>
          <span>Поддерживать</span>
        </HeroChallengeTitle>
        <HeroChallengeDesc>
          своими ресурсами и использовать ресурсы других участников сообщества
        </HeroChallengeDesc>
        <HeroChallengeCta
          className={cx(
            activeChallenge === Challenge.SUPPORT &&
              '!bg-purple-500 !text-white',
          )}
        >
          Поддержать
        </HeroChallengeCta>
      </HomeHeroChallenge>
    </div>
  );
}

function HomeHeroChallenge({
  children,
  className,
  href,
  activeChallenge,
  ...props
}: HTMLProps<HTMLDivElement> & {
  href?: string;
  activeChallenge?: Challenge;
}) {
  const childs = Children.map(
    children as ReactElement,
    (child: ReactElement) => {
      return cloneElement(child, {
        ...child.props,
        activeChallenge,
        href,
      } as HTMLProps<HTMLElement>);
    },
  );

  return (
    <div
      className={cx(
        'group/hero-challenge',
        'relative flex flex-col items-center p-6 md:p-8',
        'cursor-default bg-black/10 backdrop-blur transition dark:bg-white/5',
        'rounded-lg',
        'xl:first:!rounded-l-4xl xl:last:!rounded-r-4xl',
        'hover:scale-[1.02] hover:bg-black/15 hover:dark:bg-white/10',
        className,
      )}
      {...props}
    >
      {href && <a className="absolute inset-0 z-10" href={href} />}
      {childs}
    </div>
  );
}

function HeroChallengeTitle({
  children,
  className,
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      className={cx(
        'flex items-center gap-1 text-zinc-950 dark:text-zinc-50',
        'font-display text-xl font-medium leading-none md:text-2xl',
        className,
      )}
    >
      {children}
    </h3>
  );
}

function HeroChallengeDesc({
  children,
  className,
}: HTMLProps<HTMLParagraphElement>) {
  return (
    <p className={cx('mt-2 grow opacity-60 xl:mx-4', className)}>{children}</p>
  );
}

function HeroChallengeCta({
  children,
  className,
  activeChallenge,
  ...props
}: IButton & {
  activeChallenge?: Challenge;
}) {
  return (
    <Button
      type="button"
      className={cx(
        'mt-4 hidden md:inline-flex',
        activeChallenge
          ? 'bg-white/3 text-zinc-50'
          : 'bg-zinc-50 text-zinc-950',
        className,
      )}
      target="_self"
      hideIcon={true}
      {...props}
    >
      {children}
    </Button>
  );
}
