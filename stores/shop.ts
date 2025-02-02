import { defineStore } from 'pinia';
import { useApolloClient } from '@vue/apollo-composable';
import { shopQuery } from '~~/apollo/queries/shop';

export const useShopStore = defineStore('shop', {
  state: () => {
    return {
      description: '',
      loading: false,
      localization: {
        country: {
          currency: {
            isoCode: 'USD',
          },
        },
      },
      menuOpen: false,
      moneyFormat: '$',
    };
  },
  actions: {
    async getShopGlobals() {
      try {
        this.loading = true;
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.query({
          query: shopQuery,
        });

        if (!data.shop) {
          throw new Error('getShopData: no response');
        }

        this.description = data?.shop?.description ?? '';
        this.moneyFormat = data?.shop?.moneyFormat ?? '$';
        this.localization = data?.localization ?? {};

        // Return the shop globals as a plain object
        return {
          description: this.description,
          moneyFormat: this.moneyFormat,
          localization: this.localization,
        };
      } catch (e) {
        // Handle the error appropriately
        console.error(e);
        // Return an empty object or some default values to avoid returning non-POJOs
        return {
          description: '',
          moneyFormat: '$',
          localization: {},
        };
      } finally {
        this.loading = false;
      }
    },
    toggleMenu(state?: boolean) {
      if (typeof state === 'boolean') {
        this.menuOpen = state;
      } else {
        this.menuOpen = !this.menuOpen;
      }
    },
  },
});
