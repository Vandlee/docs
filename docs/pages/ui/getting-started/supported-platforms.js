import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/ui/getting-started/supported-platforms/supported-platforms.md?yushiiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
