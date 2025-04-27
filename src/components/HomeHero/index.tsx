import { useState } from 'react';

import Container from '@/components/Container';
import HomeHeroBg from '@/components/HomeHero/HeroBg';
import HomeHeroCustomer from '@/components/HomeHero/HeroCustomer';
import HomeHeroChallenges from '@/components/HomeHero/HeroChallenges';
import HomeHeroSlogan from '@/components/HomeHero/HeroSlogan';

import { Challenge } from './types';

export default function HomeHero() {
  const [activeChallenge, setActiveChallenge] = useState<Challenge>();

  return (
    <section className="relative z-10 py-20">
      <HomeHeroBg activeChallenge={activeChallenge} />

      <Container>
        <HomeHeroSlogan activeChallenge={activeChallenge} />

        <HomeHeroChallenges
          activeChallenge={activeChallenge}
          setActiveChallenge={setActiveChallenge}
        />
      </Container>

      <div className="mt-20">
        <Container className="max-w-screen-md">
          <HomeHeroCustomer />
        </Container>
      </div>
    </section>
  );
}
