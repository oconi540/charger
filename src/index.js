const Fastify = require('fastify');
const App = require('./app');

async function start() {
    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(App);

    await fastify.listen({
        host: '0.0.0.0',
        port: 8081,
    });
}

start().catch(err => {
    console.error(err);
    process.exit(1);
});