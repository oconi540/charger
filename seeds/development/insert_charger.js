/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('charger').del()
  await knex('charger').insert([
    {id: 1, alias: 'charger1', model: 'NW-T1', serialNumber: 1234567},
    {id: 2, alias: 'charger2', model: 'NW-T2', serialNumber: 2222222},
    {id: 3, alias: 'charger3', model: 'NW-T3', serialNumber: 3333333}
  ]);
};
