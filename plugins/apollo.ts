import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import {
  DefaultApolloClient,
  provideApolloClient,
} from '@vue/apollo-composable';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3020/graphql',
  });

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  let apolloClient: ApolloClient<unknown>;

  if (import.meta.server) {
    apolloClient = new ApolloClient({
      ssrMode: true,
      link: httpLink,
      cache,
    });
    // nuxtApp.hook('app:rendered', () => {
    //   nuxtApp.payload.data.apollo = apolloClient.extract();
    // });
  } else {
    apolloClient = new ApolloClient({
      link: httpLink,
      cache,
    });
  }

  provideApolloClient(apolloClient);
  nuxtApp.provide('apollo', { DefaultApolloClient, apolloClient });
});
