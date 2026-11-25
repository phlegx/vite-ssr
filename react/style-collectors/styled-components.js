import { ServerStyleSheet } from 'styled-components';
function ssrCollector(context) {
    const sheet = new ServerStyleSheet();
    return {
        collect(app) {
            return sheet.collectStyles(app);
        },
        toString() {
            return sheet.getStyleTags();
        },
        cleanup() {
            sheet.seal();
        },
    };
}
export default import.meta.env.SSR ? ssrCollector : null;
