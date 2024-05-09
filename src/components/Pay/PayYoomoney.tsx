import {
  type HTMLProps,
  type ReactNode,
  Fragment,
  useId,
  useState
} from "react";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'

import cx from "@/utils/cx";

interface Props extends HTMLProps<HTMLFormElement> {
  children?: ReactNode;
  label: string;
}

const { PUBLIC_YOOMONEY } = import.meta.env;
const supportSums = ['100', '200', '500', '1000', '5000', '15000'];

export default function PayYoomoney({ label} : Props) {
  const manualSumInputId = useId();
  const [summa, setSumma] = useState(supportSums[2]);

  return (
    <form method="POST" action="https://yoomoney.ru/quickpay/confirm">
      <input type="hidden" name="receiver" value={PUBLIC_YOOMONEY} />
      <input type="hidden" name="label" value={label} />
      <input type="hidden" name="quickpay-form" value="button" />

      <div>
        <label htmlFor={manualSumInputId} className="block text-sm font-medium leading-6 text-gray-100">Сумма поддержки</label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">₽</span>
          </div>
          <input
            type="text"
            name="manual-sum"
            id={manualSumInputId}
            inputMode="numeric"
            pattern="\d*"
            value={summa}
            onChange={(e) =>
              e.target.validity.valid && setSumma(e.target.value)
            }
            className={cx(
              "block w-full rounded-md border-0 py-1.5 pl-8 pr-8 sm:text-sm sm:leading-6",
              "bg-zinc-50 text-zinc-950 placeholder:text-zinc-400",
              "focus:ring-4 focus:ring-emerald-400",
            )}
            placeholder="0"
            maxLength={8}
          />
        </div>
      </div>

      {/* Sums */}
      <div className="mb-8">
        <RadioGroup
          value={summa}
          onChange={setSumma}
          aria-label="Сумма поддержки"
          name="sum"
          className="mt-4 grid grid-cols-3 gap-4"
        >
          {supportSums.map((value) => (
            <Field key={value}>
            <Radio
              key={value}
              value={value}
              className={({ checked }) =>
                cx(
                  'h-full w-full',
                  'cursor-pointer bg-white/10 text-white/80 border-white/20 shadow-sm',
                  checked ? 'ring-2 ring-emerald-400 text-emerald-400' : '',
                  'group relative flex items-center justify-center rounded-md border py-3 px-4',
                  'text-sm font-medium uppercase hover:bg-white/15 focus:outline-none sm:flex-1'
                )
              }
            >
              {({ checked }) => (
                <Fragment>
                  <Label
                    as="span"
                    className={cx(
                        checked ? 'text-emerald-400' : 'text-white/80'
                    )}
                  >
                    {`${value} ₽`}
                  </Label>
                  <span
                    className={cx(
                      checked ? 'border-emerald-400 text-emerald-400' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-md'
                    )}
                    aria-hidden="true"
                  />
                </Fragment>
              )}
            </Radio>
            </Field>
          ))}
        </RadioGroup>
      </div>

      <button
        type="submit"
        className={cx(
          'btn btn-primary has-icon w-full flex-1',
          'gap-1 rounded-full px-4 py-1.5 sm:px-5 sm:py-2',
          'hover:bg-emerald-400 hover:text-emerald-950',
          'disabled:bg-white/5 disabled:text-zinc-50',
          'bg-zinc-50 font-medium text-zinc-950',
        )}
      >
        Поддержать
      </button>
    </form>
  );
}
