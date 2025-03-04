import { FastifyRequest, FastifyReply } from 'fastify';
import { healthCheck } from '../../../application/health/healthCheck.usecase';
// import { healthCheck } from '../../../application/health/healthCheck.usecase';

export const healthHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const status = healthCheck();
  return reply.code(200).send({ status });
};
