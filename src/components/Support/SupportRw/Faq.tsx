import * as Accordion from '@radix-ui/react-accordion';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';

export default function FAQ() {
  return (
    <Accordion.Root className="faq" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Как помочь сообществу кроме финансов?
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4">
            <li className="pb-2">
              <a href="/#community">Участием</a>. Подписывайтесь на наши
              публичные ресурсы. Присоединяйтесь к сообществу.
            </li>
            <li className="pb-2">
              <a href="/resources">Ресурсами</a>. Навыками и умениями,
              реквизитом, площадками.{' '}
            </li>
            <li>
              <a href="mailto:support@rwch.org">Предожениями</a>. Отправьте
              электронное письмо с вашим предложением по поддержке или
              сотрудничеству.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Какие активности уже провело сообщество?
        </AccordionTrigger>
        <AccordionContent>
          См. в разделе "
          <a href={`/actions/${new Date().getFullYear()}`}>Активности</a>" с
          тегом "RW активность".
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>На что именно нужны финансы?</AccordionTrigger>
        <AccordionContent>
          Аренда помещения, проживание, трансфер, реквизит и оборудование,
          призовой фонд, время и усилия организаторов.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          Где написать комментарий к переводу?
        </AccordionTrigger>
        <AccordionContent>
          Направить по почте{' '}
          <a href="mailto:support@rwch.org" target="_blank">
            support@rwch.org
          </a>
          .
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Какие варианты интеграции?</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4">
            <li className="pb-2">
              Наименование активности вида: "RW" или "РВ" + наименование
              активности + ваше наименование.
            </li>
            <li className="pb-2">
              Размещение логотипа на главной странице в подразделе "Нас
              поддерживают".
            </li>
            <li className="pb-2">
              Размещение фото или логотипа на странице "О нас" в подразделе
              "Наши инвесторы".
            </li>
            <li>
              Внедрение контента в наши медийные ресурсы: Youtube, Telegram, VK.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
}
