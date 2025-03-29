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
            { pathname: '/u-docs/html/element-a' }
        ]
    }
]

export default pages;