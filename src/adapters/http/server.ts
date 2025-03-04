import Fastify from 'fastify';
import { healthHandler } from '../../ports/in/health/health.controller';

const fastify = Fastify({
  logger: true
});

// Rota de healthz
fastify.get('/healthz', healthHandler);

export const startServer = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Servidor rodando na porta 3000');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
