/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.schema.createTable('charger', function (table) {
        table.increments('id').primary();
        table.string('alias').notNullable();
        table.string('model').notNullable();
        table.string('serialNumber').notNullable().unique();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return knex.schema.dropTable('charger');
};