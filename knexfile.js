require('dotenv').config()

module.exports = {
    development: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + '/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: __dirname + '/seeds/development',
        },
    },
    testing: {
        client: 'pg',
        connection: {
            connectionString: 'postgres://ikerocon@localhost/chargerdb',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + '/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: __dirname + '/seeds/testing',
        },
    },
}