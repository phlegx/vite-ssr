export function findDependencies(modules, manifest) {
    const files = new Set();
    for (const id of modules || []) {
        for (const file of manifest[id] || []) {
            files.add(file);
        }
    }
    return [...files];
}
export function renderPreloadLinks(files) {
    let link = '';
    for (const file of files || []) {
        if (file.endsWith('.js')) {
            link += `<link rel="modulepreload" crossorigin href="${file}">`;
        }
        else if (file.endsWith('.css')) {
            link += `<link rel="stylesheet" href="${file}">`;
        }
    }
    return link;
}
// @ts-ignore
const containerId = __CONTAINER_ID__;
// @ts-ignore
const bodyTeleportsId = __BODY_TELEPORTS_ID__;
const containerRE = new RegExp(`<div id="${containerId}"([\\s\\w\\-"'=[\\]]*)><\\/div>`);
const bodyTagsOpenRE = new RegExp(`(${containerRE.source})`);
const bodyTeleportsRE = new RegExp(`<div id="${bodyTeleportsId}"([\\s\\w\\-"'=[\\]]*)><\\/div>`);
export function buildHtmlDocument(template, { headTags, bodyTags, bodyTagsOpen, bodyPrepend, bodyTeleports, htmlAttrs, bodyAttrs, body, initialState, }) {
    // @ts-ignore
    if (__VITE_SSR_DEV__) {
        if (template.indexOf(`id="${containerId}"`) === -1) {
            console.warn(`[SSR] Container with id "${containerId}" was not found in index.html`);
        }
    }
    if (htmlAttrs) {
        template = template.replace('<html', `<html ${htmlAttrs} `);
    }
    if (bodyTagsOpen) {
        template = template.replace(bodyTagsOpenRE, `${bodyTagsOpen} $1`);
    }
    if (bodyAttrs) {
        template = template.replace('<body', `<body ${bodyAttrs} `);
    }
    if (bodyTags) {
        template = template.replace('</body>', `${bodyTags}</body>`);
    }
    if (bodyTeleports) {
        if (template.indexOf(`id="${bodyTeleportsId}"`) === -1) {
            bodyPrepend = `${bodyPrepend || ''}\n<div id="${bodyTeleportsId}" data-server-rendered="true">${bodyTeleports || ''}</div>\n`;
        }
        else {
            template = template.replace(bodyTeleportsRE, (_, d1) => `<div id="${bodyTeleportsId}" data-server-rendered="true"${d1 || ''}>${bodyTeleports || ''}</div>\n`);
        }
    }
    if (headTags) {
        template = template.replace('</head>', `\n${headTags}\n</head>`);
    }
    return template.replace(containerRE, 
    // Use function parameter here to avoid replacing `$1` in body or initialState.
    // https://github.com/frandiox/vite-ssr/issues/123
    (_, d1) => `${bodyPrepend || ''}<div id="${containerId}" data-server-rendered="true"${d1 || ''}>${body || ''}</div>\n\n  <script>window.__INITIAL_STATE__=${initialState || "'{}'"}</script>`);
}
