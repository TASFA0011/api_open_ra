const path = require("path");
const mssql = require('fastify-mssql')
const fastify = require('fastify')({
    // http2: true,
    // https: process.env.DEV == 'true'
    //     ? null
    //     : {
    //         allowHTTP1: true,
    //         key: fs.readFileSync('privkey.pem'),
    //         cert: fs.readFileSync('fullchain.pem')
    //       }
});

require('dotenv').config();
const routes = require('./src/routes/routes');

fastify.register(mssql, {
  server: process.env.HOST,
  port: 1433,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
});

fastify.register(require('@fastify/multipart'), { attachFieldsToBody: true });
fastify.register(require('@fastify/formbody'));
fastify.register(require('@fastify/cors'));
fastify.register(require('@fastify/static'), { root: path.join(__dirname, 'public'), prefix: '/public/' });

routes(fastify);


fastify.listen({port: process.env.PORT, host: process.env.HOST }, function(err) {

    if (err) {
      console.error(err);
      process.exit(1);
    }

    const { address, port } = fastify.server.address()
    console.log(`server listening on http://${address}:${port}`);
});