import type { ReactElement } from 'react';
import type { Context } from '../types.js';
declare function ssrCollector(context: Context): {
    collect: (app: ReactElement) => ReactElement;
    toString: () => string;
};
declare function clientProvider(context: Context): {
    cleanup(): void;
};
declare const _default: typeof ssrCollector | typeof clientProvider;
export default _default;
