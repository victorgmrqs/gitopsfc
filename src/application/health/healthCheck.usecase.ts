import { env } from '@env/index';
import logger from '@shared/logger';

export const healthCheck = (): string => {
  logger.info(`Health check for evironment: ${env.NODE_ENV}`);
  return 'OK';
};
