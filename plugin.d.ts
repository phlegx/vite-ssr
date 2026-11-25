import type { Plugin } from 'vite';
import type { ViteSsrPluginOptions } from './config.js';
import type { SsrOptions } from './dev/server.js';
export default function ViteSsrPlugin(options?: ViteSsrPluginOptions & SsrOptions): (Plugin<any> & Record<string, any>)[];
