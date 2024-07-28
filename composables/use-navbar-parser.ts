import type { RouteLocationRaw } from '#vue-router';

export function useNavbarParser() {
  return {
    parseMenuTitle: function parseMenuTitle(
      title?: string | ((nuxt: unknown) => string)
    ) {
      return typeof title === 'function' ? title(useNuxtApp()) : title || '';
    },
    parseMenuRoute: function parseMenuRoute(
      to?: RouteLocationRaw | ((nuxt: unknown) => RouteLocationRaw)
    ) {
      return typeof to === 'function' ? to(useNuxtApp()) : to;
    },
  };
}
