import { ResolvedConfig, InlineConfig } from 'vite';
export interface BuildOptions {
    /**
     * Vite options applied only to the client build
     */
    clientOptions?: InlineConfig;
    /**
     * Vite options applied only to the server build
     */
    serverOptions?: InlineConfig & {
        /**
         * Extra properties to include in the generated server package.json,
         * or 'false' to avoid generating it.
         */
        packageJson?: Record<string, unknown> | false;
    };
}
export interface ViteSsrPluginOptions {
    /**
     * Path to entry index.html
     * @default '<root>/index.html'
     */
    input?: string;
    /**
     * ID of the app container in index.html. Defaults to "app".
     */
    containerId?: string;
    /**
     * ID of the body teleports container in index.html. Defaults to "body-teleports".
     */
    bodyTeleportsId?: string;
    build?: BuildOptions & {
        /**
         * Keep the index.html generated in the client build
         * @default false
         */
        keepIndexHtml?: boolean;
    };
    excludeSsrComponents?: Array<RegExp>;
    features?: {
        /**
         * Use '@apollo/client' renderer if present
         * @default true
         */
        reactApolloRenderer?: boolean;
    };
}
export declare const INDEX_HTML = "index.html";
export declare function getPluginOptions(viteConfig: ResolvedConfig): ViteSsrPluginOptions;
export declare function resolveViteConfig(mode?: string): Promise<ResolvedConfig>;
export declare function getEntryPoint(config?: ResolvedConfig, indexHtml?: string): Promise<string>;
