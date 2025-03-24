import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/u_ui/u-ui/getting-started/usage/usage.md?vandleeMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
