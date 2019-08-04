export default {
  Query: {
    sayHello: (_, { name }) => `Hello ${name || 'World'}`
  }
};
