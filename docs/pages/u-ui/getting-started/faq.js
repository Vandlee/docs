import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/u-ui/getting-started/faq/faq.md?yushiiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
