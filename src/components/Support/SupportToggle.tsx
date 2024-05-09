import cx from "@/utils/cx";
import { motion } from "framer-motion";

import {
  IconBallFootball,
  IconBallVolleyball,
  IconStar
} from '@tabler/icons-react';

export default function ProductToggle({ product }: { product: string }) {
  return (
    <div className="flex justify-center">
      <div className="flex gap-3 rounded-xl border border-white/5 p-2">
        {["/", "/football", "/volleyball"].map((key) => {
          const isActive = product === key;

          const isRw = key === "/";
          const isFootball = key === "/football";
          const isVolleyball = key === "/volleyball";

          return (
            <a
              key={key}
              href={`/support${key === "/" ? "" : key}`}
              className={cx(
                "relative flex cursor-pointer select-none items-center gap-1",
                "rounded-lg px-3 py-1.5 text-zinc-400 transition",
                "hover:bg-white/10",
                isActive && "!text-zinc-950 hover:bg-transparent",
              )}
              data-astro-prefetch
            >
              {isActive && (
                <motion.span
                  layoutId="bg"
                  className="absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-2xl"
                  transition={{
                    duration: 0.2,
                  }}
                />
              )}
              <>
                {isRw && <IconStar width={20} />}
                {isFootball && <IconBallFootball width={20} />}
                {isVolleyball && <IconBallVolleyball width={20} />}
              </>
              <span className="grow px-1 font-medium">
                {isRw && "RW"}
                {isFootball && "Футбол"}
                {isVolleyball && "Волейбол"}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
