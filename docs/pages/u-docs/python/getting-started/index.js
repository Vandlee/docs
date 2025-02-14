import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/python/getting-started/overview/overview.md?yushiiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
