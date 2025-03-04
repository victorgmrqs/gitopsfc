import { vi } from 'vitest';

vi.mock('@env/index', () => ({
  env: {}
}))