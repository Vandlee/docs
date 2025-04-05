import { VandleePage } from "docs/src/vandleePage";

const pages: VandleePage[] = [
    {
        pathname: '/u-docs/html/getting-started-group',
        title: 'Getting started',
        children: [
            { pathname: '/u-docs/html/getting-started', title: 'Overview' },
            { pathname: '/u-docs/html/getting-started/basic' },
        ]
    },
    {
        pathname: '/u-docs/html/element-',
        title: "Elements",
        children: [
            { 
                pathname: '/u-docs/html/element-a-group',
                subheader: 'html-a',
                updated: true,
                children: [
                    { pathname: '/u-docs/html/element-a' },
                    { 
                        pathname: '/u-docs/html/element-a-attributes',
                        children: [
                        { pathname: '/u-docs/html/element-a-attributes/download' },
                        { pathname: '/u-docs/html/element-a-attributes/href' }
                    ]}
                ]
            },
        ]
    }
]

export default pages;