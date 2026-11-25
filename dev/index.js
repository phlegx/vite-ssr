import { createSsrServer } from './server.js';
export const startServer = (options) => createSsrServer(options).then((server) => server.listen());
export { createSsrServer };
