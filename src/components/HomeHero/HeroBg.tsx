import cx from '@/utils/cx';
import { Challenge } from './types';

export default function HomeHeroBg({
  activeChallenge,
}: {
  activeChallenge?: Challenge;
}) {
  return (
    <div
      className={cx(
        'absolute top-1/2 left-1/2 -z-10 h-[400px] w-[800px]',
        '-translate-x-1/2 -translate-y-1/2',
        'opacity-10 blur-[100px]',
        'bg-emerald-500',
        activeChallenge === Challenge.PLAY && 'bg-red-500',
        activeChallenge === Challenge.SHARE && 'bg-blue-500',
        activeChallenge === Challenge.CREATE && 'bg-orange-500',
        activeChallenge === Challenge.SUPPORT && 'bg-purple-500',
      )}
    />
  );
}
