const knexConfig = require("../knexfile");
const knex = require('knex')(knexConfig.development);

async function getCharger(request, reply) {
    const { id } = request.params;
    try {
        const charger = await knex('charger').where('id', id).first();

        if (charger) {
            reply.send({
                message: 'Charger found successfully',
                success: true,
                data: charger,
            });
        } else {
            reply.code(404).send({
                message: 'Charger not found',
                success: false,
            });
        }
    } catch (error) {
        console.error('Error fetching charger:', error);
        reply.code(500).send({
            message: 'Internal server error',
            success: false,
        });
    }
}

module.exports = getCharger;