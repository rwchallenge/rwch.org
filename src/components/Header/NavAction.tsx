import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { IconCalendar } from '@tabler/icons-react';

import {
  ListItem,
  NewNavigationContent,
  NewNavigationTrigger,
} from './NavRoot';

export default function NavigationItemAction() {
  return (
    <NavigationMenu.Item>
      <NewNavigationTrigger>Активности </NewNavigationTrigger>

      <NewNavigationContent>
        <div className="grid w-[500px] gap-4 p-6">
          <ListItem
            href="/actions/2026"
            title1="2026"
            icon={<IconCalendar strokeWidth={1.5} />}
            className="hover:bg-amber-50 hover:text-amber-900"
          >
            Активности текущего года.
          </ListItem>

          <ListItem
            href="/actions/2025"
            title1="2025"
            icon={<IconCalendar strokeWidth={1.5} />}
            className="hover:bg-amber-50 hover:text-amber-900"
          >
            Активности 2025 года.
          </ListItem>

          <ListItem
            href="/actions/2024"
            title1="2024"
            icon={<IconCalendar strokeWidth={1.5} />}
            className="hover:bg-amber-50 hover:text-amber-900"
          >
            Активности 2024 года.
          </ListItem>

          <ListItem
            href="/actions/2023"
            title1="2023"
            icon={<IconCalendar strokeWidth={1.5} />}
            className="hover:bg-amber-50 hover:text-amber-900"
          >
            Активности 2023 года.
          </ListItem>

          <ListItem
            href="/actions/2022"
            title1="2022"
            icon={<IconCalendar strokeWidth={1.5} />}
            className="hover:bg-amber-50 hover:text-amber-900"
          >
            Активности 2022 года.
          </ListItem>

          <ListItem
            href="/actions/2021"
            title1="2021"
            icon={<IconCalendar strokeWidth={1.5} />}
            className="hover:bg-amber-50 hover:text-amber-900"
          >
            Активности 2021 года.
          </ListItem>
        </div>
      </NewNavigationContent>
    </NavigationMenu.Item>
  );
}
