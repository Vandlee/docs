import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Script from 'next/script';
import Head from 'next/head';

// Extend the Window interface to include adsbygoogle
declare global {
    interface Window {
      adsbygoogle: any[];
    }
}

const AdSenseRoot = styled('span')(() => ({
    width: '100%',
    display: 'flex',
    minWidth: 250
}))

function AdSense() {
    /* const adRef = React.useRef<HTMLDivElement>(null);
    const [isInitialized, setIsInitialized] = React.useState(false);
    const [isScriptLoaded, setIsScriptLoaded] = React.useState(false);
    const uniqueId = React.useRef(`ad-${Math.random().toString(36).substring(2, 10)}`);

    React.useEffect(() => {
        // Verificar si el script ya existe para evitar duplicados
        const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
        
        if (!existingScript) {
            const script = document.createElement('script');
            script.async = true;
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-8301556662915539";
            script.crossOrigin = "anonymous";
            
            script.onload = () => {
                setIsScriptLoaded(true);
            };
            
            script.onerror = (error) => {
                console.error('Error cargando script de AdSense:', error);
            };
            
            // Añadir el script al final del body
            document.body.appendChild(script);
        } else {
            // El script ya existe, marcar como cargado
            setIsScriptLoaded(true);
        }
        
        // Limpieza (aunque generalmente no eliminamos el script de AdSense)
        return () => {
            // No eliminamos el script, ya que puede ser usado por otras instancias
        };
    }, []);

    React.useEffect(() => {
        if (!isScriptLoaded || isInitialized || !adRef.current) return;

        const adElement = adRef.current.querySelector('.adsbygoogle');
        if (!adElement || adElement.getAttribute('data-ad-status')) return;

        const timer = setTimeout(() => {
            try {
                if (window.adsbygoogle) {
                    window.adsbygoogle.push({});
                    setIsInitialized(true);
                }
            } catch (error) {
                console.error('Error inicializando AdSense:', error);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [isScriptLoaded, isInitialized]); */

    return (
        <AdSenseRoot>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8301556662915539"
            crossOrigin="anonymous"></script>
            <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-fb+5w+4e-db+86"
                    data-ad-client="ca-pub-8301556662915539"
                    data-ad-slot="9987079348"></ins>
            <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </AdSenseRoot>
    );
}


export default AdSense;