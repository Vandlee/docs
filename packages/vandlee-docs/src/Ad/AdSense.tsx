'use client';

import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import { ResponsiveAdUnit } from 'nextjs-google-adsense';

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
    /* React.useEffect(() => {
        // Verifica si estamos en el cliente y si el script ya está cargado
        if (typeof window !== 'undefined') {
          const loadAd = () => {
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {
              console.error('Error al cargar AdSense:', err);
            }
          };
    
          // Si adsbygoogle ya está cargado, ejecuta el push inmediatamente
          if (window.adsbygoogle) {
            loadAd();
          } else {
            // Si no, espera a que el script se cargue
            window.addEventListener('load', loadAd);
            return () => window.removeEventListener('load', loadAd);
          }
        }
      }, []); */

    return (
        <AdSenseRoot>
            <ResponsiveAdUnit 
                publisherId='pub-8301556662915539'
                slotId="3176761436"
                type="after-home-hero"
            />
            
        </AdSenseRoot>
    );
}


export default AdSense;