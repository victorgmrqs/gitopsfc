// import { healthCheck } from './healthCheck.usecase';

import { describe, expect, it } from 'vitest';
import { healthCheck } from './healthCheck.usecase';

describe('healthCheck', () => {
  it('deve retornar "OK"', () => {
    expect(healthCheck()).toBe('OK');
  });
});