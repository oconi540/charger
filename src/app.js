const { FastifyInstance } = require('fastify');
const Sensible = require('@fastify/sensible');
const knexConfig = require('../knexfile');
const getCharger = require('./GETcharger');

async function app(fastify, opts) {
    await fastify.register(Sensible);

    fastify.route({
        url: '/charger/:id',
        method: 'GET',
        handler: getCharger,
    });
}

module.exports = app;
