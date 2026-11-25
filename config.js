import fs from 'fs';
import path from 'path';
import { resolveConfig } from 'vite';
export const INDEX_HTML = 'index.html';
export function getPluginOptions(viteConfig) {
    return (viteConfig.plugins.find((plugin) => plugin.name === '@flowtools/vite-ssr')?.viteSsrOptions || {});
}
export async function resolveViteConfig(mode) {
    return resolveConfig({}, 'build', mode || process.env.MODE || process.env.NODE_ENV, mode || process.env.MODE || process.env.NODE_ENV);
}
export async function getEntryPoint(config, indexHtml) {
    if (!config) {
        config = await resolveViteConfig();
    }
    if (!indexHtml) {
        indexHtml = await fs.promises.readFile(getPluginOptions(config).input || path.resolve(config.root, INDEX_HTML), 'utf-8');
    }
    const matches = indexHtml
        .substr(indexHtml.lastIndexOf('script type="module"'))
        .match(/src="(.*)">/i);
    const entryFile = matches?.[1] || 'src/main';
    return path.join(config.root, entryFile);
}
