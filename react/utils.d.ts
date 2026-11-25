import type { Base, PagePropsOptions, State } from '../utils/types.js';
import type { PropsProvider as PropsProviderType, RouteRaw } from './types.js';
type RouterOptions = {
    base?: Base;
    routes: RouteRaw[];
    initialState?: State;
    PropsProvider?: PropsProviderType;
    pagePropsOptions?: PagePropsOptions;
};
export declare function createRouter({ base, routes, initialState, PropsProvider, pagePropsOptions, }: RouterOptions): {
    getCurrentRoute: () => RouteRaw | undefined;
    isFirstRoute: () => boolean;
    routes: RouteRaw[];
};
export type Router = ReturnType<typeof createRouter>;
export {};
