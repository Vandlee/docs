import * as React from 'react';
import AppFrame from 'docs/src/modules/components/AppFrame';
import MarkdownDocsV2 from 'docs/src/modules/components/MarkdownDocsV2';
import * as pageProps from 'docs/data/u-docs/html/elements/a/a.md?vandleeMarkdown';

export default function Page() {
  return <MarkdownDocsV2 {...pageProps} />;
}

Page.getLayout = (page) => {
  return <AppFrame>{page}</AppFrame>;
};
