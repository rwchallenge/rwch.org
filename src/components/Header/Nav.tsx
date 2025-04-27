import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import cx from '@/utils/cx';
import ItemAction from './NavAction';
import ItemCompany from './NavCompany';
import ItemResource from './NavResource';
import NewNavigationRoot from './NavRoot';
import ItemSupport from './NavSupport';

export default function Navigation() {
  return (
    <NewNavigationRoot>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className={cx(
            'flex items-center gap-0.5 rounded-full px-4 py-2 whitespace-nowrap select-none',
            'opacity-60 hover:bg-white/5 hover:opacity-100',
          )}
          href="/about"
        >
          О нас
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      <ItemAction />
      <ItemCompany />
      <ItemResource />
      <ItemSupport />
    </NewNavigationRoot>
  );
}
