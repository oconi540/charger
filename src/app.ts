import { FastifyInstance } from 'fastify';
// import knexConfig from '../knexfile';
import getCharger from './GETcharger';

async function app(fastify: FastifyInstance, opts: any){
    fastify.get('/charger/:id', getCharger);
}

export default app;