import cx from '@/utils/cx';
import * as Logo from '@/components/HomeHero/HeroCustomerIcons';

export default function HomeHeroPartner() {
  return (
    <>
      {/* title */}
      <h5 className="text-sm opacity-40">Нас поддерживают лучшие команды</h5>

      {/* logos */}
      <div className={cx('relative -mx-6 mt-6 overflow-hidden md:mx-0')}>
        <div
          className="inline-block overflow-hidden whitespace-nowrap md:!animate-none"
          style={{
            animationDuration: '20s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationName: 'animate-slide',
          }}
        >
          <div className="inline-block">
            <Logos />
          </div>
          <div className="inline-block">
            <Logos className="md:hidden" />
          </div>
        </div>
      </div>
    </>
  );
}

function Logos({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        'overflow-hidden whitespace-nowrap',
        'flex-wrap items-center justify-center gap-x-10 gap-y-6',
        'md:flex',
        className,
      )}
    >
      {customers.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          className="mx-4 inline-flex align-middle opacity-40 transition hover:scale-105 hover:opacity-100 md:mx-0"
          title={name}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

const customers = [
  {
    name: 'RWChallenge',
    url: '/',
    icon: <Logo.RWChallenge />,
  },
  {
    name: 'Поддержать',
    url: 'mailto:support@rwch.org',
    icon: <Logo.NewParnter />,
  },
];
