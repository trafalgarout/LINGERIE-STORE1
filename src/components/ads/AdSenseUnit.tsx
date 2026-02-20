'use client';

import React, { useEffect, useRef } from 'react';
import styles from './AdSenseUnit.module.css';

interface AdSenseUnitProps {
    slot?: string;
    format?: 'auto' | 'autorelaxed' | 'rectangle' | 'horizontal' | 'vertical';
    label?: string;
    className?: string;
}

declare global {
    interface Window {
        adsbygoogle: Record<string, unknown>[];
    }
}

export default function AdSenseUnit({
    slot,
    format = 'auto',
    className,
}: AdSenseUnitProps) {
    const adRef = useRef<HTMLModElement>(null);
    const pushed = useRef(false);

    useEffect(() => {
        if (pushed.current) return;

        // Wait a tick to ensure component is fully laid out by the browser/Framer Motion
        const timer = setTimeout(() => {
            if (adRef.current && adRef.current.offsetWidth > 0) {
                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                    pushed.current = true;
                } catch (e) {
                    console.error('AdSense push error:', e);
                }
            }
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.adContainer} ${className || ''}`}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block', width: '100%', minWidth: '250px', minHeight: '90px' }}
                data-ad-client="ca-pub-6865939387108271"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}
