import { ReactElement } from 'react';
import type { Context } from '../types.js';
declare function ssrCollector(context: Context): Promise<{
    collect(app: ReactElement): import("react").FunctionComponentElement<import("react").ProviderProps<import("@emotion/cache").EmotionCache | null>>;
    toString(html: string): string;
}>;
declare function clientProvider(context: Context): {
    provide(app: ReactElement): import("react").FunctionComponentElement<import("react").ProviderProps<import("@emotion/cache").EmotionCache | null>>;
};
declare const _default: typeof ssrCollector | typeof clientProvider;
export default _default;
