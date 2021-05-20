import { derived } from "svelte/store";
import { register, _, locale, init, getLocaleFromNavigator } from "svelte-i18n";

async function setupI18n() {
  register("en", () => import("./lang/en.json"));
  register("pt", () => import("./lang/pt.json"));

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator()
  });
}

const isLocaleLoaded = derived(
  locale,
  ($locale) => typeof $locale === "string"
);

const dir = derived(locale, ($locale) => ($locale === "ar" ? "rtl" : "ltr"));

export { _, setupI18n, isLocaleLoaded, dir };
