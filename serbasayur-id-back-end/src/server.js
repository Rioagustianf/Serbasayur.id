const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.NODE_ENV !== 'production' ? 5000 : 3000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(Inert);

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
