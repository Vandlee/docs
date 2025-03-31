import * as React from 'react';

export default function AdsTerra() {
    const banner = React.useRef<HTMLSpanElement>(null);

    const atOptions = {
        key: '317205b2e3bc6e8e2bcee901cbe47a0d',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    }

    React.useEffect(() => {
        if (banner.current && !banner.current.firstChild) {
            const conf = document.createElement('script')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`
                
            banner.current.append(conf)
            banner.current.append(script)
        }
    }, [banner]);
    
    return (
        <span
            style={{

            height: 90, // <== these may be different

            width: '100%', // <== these may be different

            marginLeft: '0.5rem',

            marginRight: '0.5rem',

            marginTop: '1.25rem',

            marginBottom: '1.25rem',

            color: '#ffffff',

            textAlign: 'center',

            justifyContent: 'center',

            alignItems: 'center',

            borderWidth: '1px',

            borderColor: '#E5E7EB',

            }}

            ref={banner}

        ></span>
    )
}