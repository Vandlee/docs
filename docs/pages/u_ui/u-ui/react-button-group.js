import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocsV2';
import AppFrame from 'docs/src/modules/components/AppFrame';
import * as pageProps from 'docs/data/u_ui/u-ui/components/button-group/button-group.md?vandleeMarkdown';

export default function Page() {
    return <MarkdownDocs {...pageProps} />;
}

Page.getLayout = (page) => {
    return <AppFrame>{page}</AppFrame>;
}