import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/u-docs/javascript/getting-started/overview/overview.md?u-shiiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
