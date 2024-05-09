import * as Accordion from "@radix-ui/react-accordion";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

export default function ActionFaq() {
  return (
    <Accordion.Root className="faq" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Что такое "RW активность"?
        </AccordionTrigger>
        <AccordionContent>
          Это активность сообщества, организованная его участниками.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Как стать участником сообщества?</AccordionTrigger>
        <AccordionContent>
          <p>
            Самый простой способ - это подписаться на <a href="/#community">публичные ресурсы</a> сообщества, следить за активностями и подключаться по мере вашего интереса.
          </p>
          <p>
            Ценность сообщества - это его <a href="/resources">ресурсы</a>, которыми обмениваются его участники.
            Поэтому полноценным участником сообщества является тот, кто не только получает от сообщества впечатления или ресурсы, но и отдает свои собственные.
            Для таких участников сообщества планируются отдельные активности, способы интеграции и сотрудничества.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
}
