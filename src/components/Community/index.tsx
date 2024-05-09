import Bg from "@/components/Bg";
import Container from "@/components/Container";
import {
  SectionHeader,
  SectionHeaderSummary,
  SectionHeaderTitle,
} from "@/components/SectionHeader";
import Icon, { ICON_NAMES } from "@/components/Icon";

import {
  CommunityBox,
  CommunityBoxButton,
  CommunityBoxDesc,
  CommunityBoxTitle,
} from "./Comp";

export default function HomeCommunity() {
  return (
    <section id="community" className="relative py-16 md:py-28">
      <Bg className="top-32 h-1/2 bg-yellow-500" />

      <Container>
        {/* header */}
        <SectionHeader>
          <SectionHeaderTitle>Сообщество</SectionHeaderTitle>
          <SectionHeaderSummary>
            присоединяйтесь к нашим публичным пространствам чтобы стать частью сообщества и не пропустить интересные события
          </SectionHeaderSummary>
        </SectionHeader>

        <div className="mt-10 grid gap-2 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          <CommunityBox>
            <Icon
              icon={ICON_NAMES.Youtube}
              className="mb-4 text-4xl group-hover/community-box:text-emerald-400 md:text-5xl"
              strokeWidth="1"
            />
            <CommunityBoxTitle>Youtube</CommunityBoxTitle>
            <CommunityBoxDesc>
              Смотрите нас на Youtube, чтобы быть в курсе последних событий.
            </CommunityBoxDesc>
            <CommunityBoxButton href="https://www.youtube.com/@rwch_team">
              Смотреть
            </CommunityBoxButton>
          </CommunityBox>

          <CommunityBox>
            <Icon
              icon={ICON_NAMES.Telegram}
              className="mb-4 text-4xl group-hover/community-box:text-emerald-400 md:text-5xl"
              strokeWidth="1"
            />
            <CommunityBoxTitle>Telegram</CommunityBoxTitle>
            <CommunityBoxDesc>
              Присоединяйтесь к нашему сообществу Telegram, чтобы общаться с другими людьми.
            </CommunityBoxDesc>
            <CommunityBoxButton href="https://t.me/rw_challenge">
              Присоединиться
            </CommunityBoxButton>
          </CommunityBox>

          <CommunityBox>
            <Icon
              icon={ICON_NAMES.VK}
              className="mb-4 text-4xl group-hover/community-box:text-emerald-400 md:text-5xl"
              strokeWidth="1"
            />
            <CommunityBoxTitle>ВКонтакте</CommunityBoxTitle>
            <CommunityBoxDesc>
              Присоединяйтесь к нашему сообществу ВКонтакте, чтобы быть в курсе последних новостей.
            </CommunityBoxDesc>
            <CommunityBoxButton href="https://vk.com/rwchallenge">
              Присоединиться
            </CommunityBoxButton>
          </CommunityBox>

          <CommunityBox>
            <Icon
              icon={ICON_NAMES.Github}
              className="mb-4 text-4xl group-hover/community-box:text-emerald-400 md:text-5xl"
              strokeWidth="1"
            />
            <CommunityBoxTitle>Github</CommunityBoxTitle>
            <CommunityBoxDesc>
              Исследуйте наши проекты, которые мы разработали с открытым исходным кодом.
            </CommunityBoxDesc>
            <CommunityBoxButton href="https://github.com/rwchallenge">
              Исследовать
            </CommunityBoxButton>
          </CommunityBox>
        </div>
      </Container>
    </section>
  );
}
