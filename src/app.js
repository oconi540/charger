const { FastifyInstance } = require('fastify');
const Sensible = require('@fastify/sensible');

const charger = {
    id: 1,
    alias: 'charger1',
    model: 'NW-T1',
    serialNumber: 1234567
};

async function plugin(fastify, opts) {
    await fastify.register(Sensible);

    fastify.route({
        url: '/charger/:id',
        method: 'GET',
        handler: function myHandler(request, reply) {
            const { id } = request.params;
            // Simulate fetching charger data based on the provided id
            const selectedCharger = charger.id == id ? charger : null;

            if (selectedCharger) {
                reply.send({
                    message: 'Charger found successfully',
                    success: true,
                    data: selectedCharger,
                });
            } else {
                reply.code(404).send({
                    message: 'Charger not found',
                    success: false,
                });
            }
        },
    });
}

module.exports = plugin;
