import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/php/tutorial/ola/ola.md?yushiiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
