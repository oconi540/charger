const { FastifyInstance } = require('fastify');
const knexConfig = require('../knexfile');
const getCharger = require('./GETcharger');

async function app(fastify, opts) {
    fastify.get('/charger/:id', getCharger);
}

module.exports = app;
