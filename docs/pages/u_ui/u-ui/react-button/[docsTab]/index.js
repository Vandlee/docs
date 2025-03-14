import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocsV2';
import AppFrame from 'docs/src/modules/components/AppFrame';
import * as pageProps from 'docs/data/u_ui/u-ui/components/buttons/buttons.md?u-shiiMarkdown';
import mapApiPageTranslations from 'docs/src/modules/utils/mapApiPageTranslations';
import ButtonApiJsonPageContent from '../../api/button.json';

export default function Page(props) {
    const { userLanguage, ...other } = props;
    return <MarkdownDocs {...pageProps} {...other} />;
}
  
Page.getLayout = (page) => {
    return <AppFrame>{page}</AppFrame>;
};

export const getStaticPaths = () => {
    return {
        paths: [{ params: { docsTab: 'components-api' } }],
        fallback: false
    }
}

export const getStaticProps = () => {
    const ButtonApiReq = require.context(
        'docs/translations/api-u-ui-docs/button',
        false,
        /button.*.json$/,
    );
    const ButtonApiDescriptions = mapApiPageTranslations(ButtonApiReq);

    return {
        props: {
            componentsApiDescriptions: { Button: ButtonApiDescriptions },
            componentsApiPageContents: { Button: ButtonApiJsonPageContent },
        },
    };
};