import * as React from 'react';
import Divider from '@u_ui/u-ui/Divider';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

export default function UCore() {
    return (
        <BrandingCssVarsProvider>
            <Head 
                title="U-Core: Ready-to-use React components, free forever"
                description='Get a growing list of React components, ready-to-use, free forever and with accessibility always in mind.'
            />
            <AppHeaderBanner />
            <AppHeader gitHubRepository='https://github.com/yugashiki/u-shii' />
            <main id="main-content">
                hola
                <Divider />
            </main>
        </BrandingCssVarsProvider>
    )
}