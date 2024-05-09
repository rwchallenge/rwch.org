/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_YANDEX_METRIKA: string;
  readonly PUBLIC_YOOMONEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
