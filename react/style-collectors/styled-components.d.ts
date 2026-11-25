import type { ReactElement } from 'react';
import type { Context } from '../types.js';
declare function ssrCollector(context: Context): {
    collect(app: ReactElement): JSX.Element;
    toString(): string;
    cleanup(): void;
};
declare const _default: typeof ssrCollector | null;
export default _default;
