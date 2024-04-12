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
            directory: __dirname + 'db/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: __dirname + 'db/seeds',
        },
    }
}
