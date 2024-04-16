import * as dotenv from 'dotenv';
import { Knex } from 'knex';

dotenv.config();

const knexConfig: { [key: string]: Knex.Config } = {
    development: {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL as string,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            extension: 'ts',
            directory: __dirname + '/db/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            extension: 'ts',
            directory: __dirname + '/db/seeds',
        },
    },
};

export default knexConfig;
