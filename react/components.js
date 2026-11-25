import { Fragment, createElement, createContext as reactCreateContext, useContext as reactUseContext, useEffect, useState, } from 'react';
export const ClientOnly = ({ children, }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true));
    return mounted ? createElement(Fragment, { children }) : null;
};
const SSR_CONTEXT = reactCreateContext(null);
export function provideContext(app, context) {
    return createElement(SSR_CONTEXT.Provider, { value: context }, app);
}
export function useContext() {
    return reactUseContext(SSR_CONTEXT);
}
