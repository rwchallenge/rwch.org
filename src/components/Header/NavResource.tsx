import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IconCategory2, IconUsersGroup, IconMapPin, IconCreditCard } from "@tabler/icons-react";

import {
  ListItem,
  NewNavigationContent,
  NewNavigationTrigger,
} from './NavRoot';

export default function NavigationItemResource() {
  return (
    <NavigationMenu.Item>
      <NewNavigationTrigger>Ресурсы</NewNavigationTrigger>

      <NewNavigationContent>
        <div className="grid w-[500px] gap-4 p-6">
          <ListItem
            href="/resources/people"
            title1="Люди"
            icon={<IconUsersGroup strokeWidth={1.5} />}
            className="hover:bg-red-50 hover:text-red-800"
          >
            для участия и проведения активности
          </ListItem>

          <ListItem
            href="/resources/equipment"
            title1="Реквизит"
            icon={<IconCategory2 strokeWidth={1.5} />}
            className="hover:bg-blue-50 hover:text-blue-800"
          >
            обмен оборудованием и реквизитом
          </ListItem>

          <ListItem
            href="/resources/places"
            title1="Площадки"
            icon={<IconMapPin strokeWidth={1.5} />}
            className="hover:bg-orange-50 hover:text-orange-800"
          >
            для проведения активности
          </ListItem>

          <ListItem
            href="/resources/finance"
            title1="Финансы"
            icon={<IconCreditCard strokeWidth={1.5} />}
            className="hover:bg-purple-50 hover:text-purple-800"
          >
            собираем и делимся
          </ListItem>
        </div>
      </NewNavigationContent>
    </NavigationMenu.Item>
  );
}
