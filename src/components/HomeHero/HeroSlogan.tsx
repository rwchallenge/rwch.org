import cx from '@/utils/cx';
import { Challenge } from './types';

export default function HomeHeroSlogan({
  activeChallenge,
}: {
  activeChallenge?: Challenge;
}) {
  return (
    <h1
      className={cx(
        'inline-flex flex-col gap-1 transition',
        'font-display text-6xl leading-none font-bold md:text-[8rem]',
        'bg-linear-to-r from-20% bg-clip-text text-transparent',
        'from-emerald-400 to-yellow-300',
        activeChallenge === Challenge.PLAY && 'from-red-500 to-red-200',
        activeChallenge === Challenge.SHARE && 'from-blue-500 to-blue-200',
        activeChallenge === Challenge.CREATE && 'from-orange-500 to-orange-200',
        activeChallenge === Challenge.SUPPORT &&
          'from-purple-500 to-purple-200',
      )}
    >
      <span>Реальный Мир</span>
      <span>Зовёт тебя</span>
    </h1>
  );
}
