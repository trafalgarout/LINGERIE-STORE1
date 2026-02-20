'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.css';

interface LogoProps {
    className?: string;
}

export default function Logo({ className }: LogoProps) {
    return (
        <Link href="/" className={`${styles.logo} ${className || ''}`}>
            <div className={styles.logoContent}>
                <svg className={styles.logoIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 18H19V16.5L17 15L19 7L14 11L12 4L10 11L5 7L7 15L5 16.5V18Z" fill="currentColor" />
                </svg>
                <span className={styles.logoText}>
                    Lingerie<span className={styles.logoSpan}>Paradise</span>
                </span>
                <div className={styles.logoAccentLine}></div>
            </div>
        </Link>
    );
}
