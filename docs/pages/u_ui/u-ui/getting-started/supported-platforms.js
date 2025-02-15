import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/u_ui/u-ui/getting-started/supported-platforms/supported-platforms.md?u-shiiMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
