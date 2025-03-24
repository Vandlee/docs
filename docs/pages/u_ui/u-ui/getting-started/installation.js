import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docs/data/u_ui/u-ui/getting-started/installation/installation.md?vandleeMarkdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} disableAd />;
}
