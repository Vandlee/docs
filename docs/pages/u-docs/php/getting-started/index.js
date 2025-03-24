import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/u-docs/php/getting-started/overview/overview.md?vandleeMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
