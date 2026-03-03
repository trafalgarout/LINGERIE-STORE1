'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already consented
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            // Slight delay before showing to ensure smooth page load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        // In a real application, you might also want to disable tracking scripts here
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.bannerContainer}>
            <div className={`container ${styles.bannerContent}`}>
                <div className={styles.textContainer}>
                    <p className={styles.bannerText}>
                        We use cookies to enhance your browsing experience, display personalized AdSense content, and analyze our traffic.
                        By clicking "Accept All", you consent to our use of cookies in accordance with our{' '}
                        <Link href="/privacy-policy" className={styles.policyLink}>
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
                <div className={styles.actions}>
                    <button className={styles.declineBtn} onClick={handleDecline}>
                        Decline
                    </button>
                    <button className={styles.acceptBtn} onClick={handleAccept}>
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}
