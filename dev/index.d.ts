import { createSsrServer } from './server.js';
import { ViteDevServer } from 'vite';
export declare const startServer: (options: Parameters<typeof createSsrServer>[0]) => Promise<ViteDevServer>;
export { createSsrServer };
export type { SsrOptions } from './server.js';
