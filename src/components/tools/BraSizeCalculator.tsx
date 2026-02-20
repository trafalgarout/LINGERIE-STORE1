'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './BraSizeCalculator.module.css';

type Unit = 'inches' | 'cm';

export default function BraSizeCalculator() {
    const [unit, setUnit] = useState<Unit>('inches');
    const [underbust, setUnderbust] = useState<string>('');
    const [bust, setBust] = useState<string>('');
    const [result, setResult] = useState<{
        band: number;
        cup: string;
        uk: string;
        us: string;
        eu: string;
    } | null>(null);

    const affiliateRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (result && affiliateRef.current) {
            setTimeout(() => {
                affiliateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [result]);

    const calculateSize = () => {
        let u = parseFloat(underbust);
        let b = parseFloat(bust);

        if (isNaN(u) || isNaN(b)) return;

        // Convert to inches for calculation logic if needed
        if (unit === 'cm') {
            u = u / 2.54;
            b = b / 2.54;
        }

        // Step 1: Band Size
        // Standard logic: If even, band = underbust. If odd, band = underbust + 1.
        // Some older models add 4-5 inches, but modern brands (and calculators) use +0 or +2.
        // Let's use the most reliable "Modern" method: Underbust rounded to nearest even.
        let band = Math.round(u);
        if (band % 2 !== 0) band += 1;

        // Step 2: Cup Size
        const diff = Math.round(b - band);
        const cups = ['AA', 'A', 'B', 'C', 'D', 'DD (E)', 'DDD (F)', 'G', 'H', 'I', 'J', 'K'];

        // Cup index: diff 0 = AA, 1 = A, 2 = B...
        let cupIndex = diff;
        if (cupIndex < 0) cupIndex = 0;
        if (cupIndex > cups.length - 1) cupIndex = cups.length - 1;

        const cup = cups[cupIndex];

        // Step 3: Conversions
        const usSize = `${band}${cup}`;

        // UK conversion (mostly same until D, then differs)
        const ukCups = ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'FF', 'G', 'GG', 'H'];
        const ukCup = ukCups[cupIndex] || cup;
        const ukSize = `${band}${ukCup}`;

        // EU conversion (Band is cm rounded to 5, Cup is letters)
        const euBand = Math.round((band * 2.54) / 5) * 5;
        const euCups = ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        const euCup = euCups[cupIndex] || cup;
        const euSize = `${euBand}${euCup}`;

        setResult({
            band,
            cup,
            us: usSize,
            uk: ukSize,
            eu: euSize,
        });
    };



    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Bra Size Calculator</h2>
            <p className={styles.subtitle}>Find your perfect fit in seconds with our precise measurement tool.</p>

            <div className={styles.unitToggle}>
                <button
                    className={`${styles.toggleBtn} ${unit === 'inches' ? styles.toggleBtnActive : ''}`}
                    onClick={() => setUnit('inches')}
                >
                    Inches
                </button>
                <button
                    className={`${styles.toggleBtn} ${unit === 'cm' ? styles.toggleBtnActive : ''}`}
                    onClick={() => setUnit('cm')}
                >
                    Centimeters
                </button>
            </div>

            <div className={styles.calculatorGrid}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Underbust Measurement</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="e.g. 32"
                            value={underbust}
                            onChange={(e) => setUnderbust(e.target.value)}
                        />
                        <span className={styles.unit}>{unit}</span>
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Bust Measurement</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="e.g. 36"
                            value={bust}
                            onChange={(e) => setBust(e.target.value)}
                        />
                        <span className={styles.unit}>{unit}</span>
                    </div>
                </div>
            </div>

            <button className={`${styles.calculateBtn} btn btn-primary`} onClick={calculateSize}>
                Calculate My Size
            </button>

            {result && (
                <div className={styles.resultSection}>
                    <div className={styles.resultHeader}>
                        <span className={styles.resultLabel}>Your Estimated Size</span>
                        <div className={styles.mainSize}>{result.us}</div>
                        <p className={styles.leadDesc}>Based on standard US sizing conventions.</p>
                    </div>

                    <div className={styles.conversionGrid}>
                        <div className={styles.converstionItem}>
                            <span className={styles.region}>United States</span>
                            <div className={styles.convertedSize}>{result.us}</div>
                        </div>
                        <div className={styles.converstionItem}>
                            <span className={styles.region}>United Kingdom</span>
                            <div className={styles.convertedSize}>{result.uk}</div>
                        </div>
                        <div className={styles.converstionItem}>
                            <span className={styles.region}>Europe</span>
                            <div className={styles.convertedSize}>{result.eu}</div>
                        </div>
                    </div>

                    <div ref={affiliateRef} className={styles.affiliateSection}>
                        <h3 className={styles.affiliateTitle}>Recommended Bras for Size {result.us}</h3>
                        <p className={styles.affiliateDesc}>
                            Now that you know your perfect fit, explore top-rated bras in your exact size for maximum comfort and support.
                        </p>
                        
                        <div className={styles.productGrid}>
                            {[1, 2, 3].map((item) => (
                                <div key={item} className={styles.productCard}>
                                    <div className={styles.productImageWrapper}>
                                        <div className={styles.imagePlaceholder}>
                                            <svg className={styles.placeholderIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className={styles.productTitle}>Top Rated Luxury Comfort Bra Size {result.us}</h4>
                                    <a
                                        href={`https://www.amazon.com/s?k=bra+size+${result.us}&tag=saidbagari-20`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.shopBtn} btn btn-primary`}
                                    >
                                        Shop Size {result.us} on Amazon
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {!result && (
                <div className={styles.fallbackSection}>
                    <a 
                        href="https://www.amazon.com/s?k=best+selling+bras&tag=saidbagari-20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.shopBtn} btn btn-outline`}
                        style={{ display: 'inline-block', width: 'auto' }}
                    >
                        Browse Best-Selling Bras on Amazon
                    </a>
                </div>
            )}

            <div className={styles.instructions}>
                <h4>How to Measure Correctly</h4>
                <ol>
                    <li>
                        <strong>Step 1: Underbust</strong> - Measure around your ribcage directly under your bust. The tape should be snug and level.
                    </li>
                    <li>
                        <strong>Step 2: Full Bust</strong> - Measure around the fullest part of your bust. Keep the tape loose enough so you can breathe, but level with the ground.
                    </li>
                    <li>
                        <strong>Note</strong> - For the most accurate result, wear a non-padded bra while measuring and stand up straight.
                    </li>
                </ol>
            </div>
        </div>
    );
}
