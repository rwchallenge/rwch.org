import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {
  IconUserPlus,
  IconPigMoney,
  IconMail,
  IconListCheck
} from '@tabler/icons-react';

import {
  ListItem,
  NewNavigationContent,
  NewNavigationTrigger,
} from './NavRoot';

export default function NavigationItemCompany() {
  return (
    <NavigationMenu.Item>
      <NewNavigationTrigger>Поддержать</NewNavigationTrigger>

      <NewNavigationContent>
        <div className="grid w-[500px] gap-4 p-6">
          <ListItem
            href="/#community"
            title1="Участием"
            icon={<IconUserPlus />}
          >
            Подписывайтесь на наши публичные ресурсы. Присоединяйтесь к сообществу.
          </ListItem>

          <ListItem
            href={`https://yoomoney.ru/to/${import.meta.env.PUBLIC_YOOMONEY}`}
            title1="Финансами"
            icon={<IconPigMoney />}
          >
            Быстрая поддержка денежным переводом.
          </ListItem>

          <ListItem
            href="mailto:support@rwch.org"
            title1="Предожениями"
            icon={<IconMail />}
          >
            Отправьте электронное письмо с вашим предложением по поддержке или сотрудничеству.
          </ListItem>

          <ListItem
            href="/support"
            title1="Весь список"
            icon={<IconListCheck />}
          >
            Посмотрите все способы поддержки сообщества.
          </ListItem>
        </div>
      </NewNavigationContent>
    </NavigationMenu.Item>
  );
}
