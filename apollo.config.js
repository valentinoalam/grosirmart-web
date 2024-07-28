export default function (context) {
  return {
    httpEndpoint: {
      default: 'http://localhost:3000/graphql',
      // Add more endpoints as needed
    },
    // Optional configurations
    prefix: 'I',
    tokenKey: 'token',
    gqlDir: 'graphql',
  };
}
