export declare function findDependencies(modules: string[], manifest: Record<string, string[]>): string[];
export declare function renderPreloadLinks(files: string[]): string;
type DocParts = {
    headTags?: string;
    bodyTags?: string;
    bodyTagsOpen?: string;
    htmlAttrs?: string;
    bodyAttrs?: string;
    bodyPrepend?: string;
    bodyTeleports?: string;
    body?: string;
    initialState?: string;
};
export declare function buildHtmlDocument(template: string, { headTags, bodyTags, bodyTagsOpen, bodyPrepend, bodyTeleports, htmlAttrs, bodyAttrs, body, initialState, }: DocParts): string;
export {};
