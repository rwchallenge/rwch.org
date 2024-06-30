import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { IconPlayFootball, IconPlayVolleyball } from '@tabler/icons-react';

import {
  ListItem,
  NewNavigationContent,
  NewNavigationTrigger,
} from './NavRoot';

export default function NavigationItemCompany() {
  return (
    <NavigationMenu.Item>
      <NewNavigationTrigger>Команды</NewNavigationTrigger>

      <NewNavigationContent>
        <div className="grid w-[500px] gap-4 p-6">
          <ListItem
            href="/teams/football"
            title1="Футбольная"
            icon={<IconPlayFootball strokeWidth={1.5} />}
            className="hover:bg-red-50 hover:text-red-900"
          >
            Мужская команда. Играем в различных форматах.
          </ListItem>

          <ListItem
            href="/teams/volleyball"
            title1="Волейбольная"
            icon={<IconPlayVolleyball strokeWidth={1.5} />}
            className="hover:bg-blue-50 hover:text-blue-900"
          >
            Две мужские команды и одна женская. Играем в классический волейбол.
          </ListItem>
        </div>
      </NewNavigationContent>
    </NavigationMenu.Item>
  );
}
