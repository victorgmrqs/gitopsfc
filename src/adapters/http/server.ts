import Fastify from 'fastify';

import logger from 'infra/logger';

import { healthHandler } from '../../ports/in/health/health.controller';

const fastify = Fastify({
  logger: true,
});

fastify.get('/healthz', healthHandler);

export const startServer = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    logger.info('Servidor rodando na porta 3000');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
