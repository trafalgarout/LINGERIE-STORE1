'use client';

import React, { useState } from 'react';
import styles from './PantySizeFinder.module.css';

type Unit = 'inches' | 'cm';

interface SizeRow {
    size: string;
    waistLow: number;
    waistHigh: number;
    hipLow: number;
    hipHigh: number;
    us: string;
    uk: string;
    eu: string;
    au: string;
}

const sizeChart: SizeRow[] = [
    { size: 'XS', waistLow: 24, waistHigh: 25, hipLow: 34, hipHigh: 35, us: '0-2', uk: '4-6', eu: '32-34', au: '4-6' },
    { size: 'S', waistLow: 26, waistHigh: 27, hipLow: 36, hipHigh: 37, us: '4-6', uk: '8-10', eu: '36-38', au: '8-10' },
    { size: 'M', waistLow: 28, waistHigh: 29, hipLow: 38, hipHigh: 39, us: '8-10', uk: '12-14', eu: '40-42', au: '12-14' },
    { size: 'L', waistLow: 30, waistHigh: 32, hipLow: 40, hipHigh: 42, us: '12-14', uk: '16-18', eu: '44-46', au: '16-18' },
    { size: 'XL', waistLow: 33, waistHigh: 35, hipLow: 43, hipHigh: 45, us: '16-18', uk: '20-22', eu: '48-50', au: '20-22' },
    { size: 'XXL', waistLow: 36, waistHigh: 38, hipLow: 46, hipHigh: 48, us: '20-22', uk: '24-26', eu: '52-54', au: '24-26' },
];

export default function PantySizeFinder() {
    const [unit, setUnit] = useState<Unit>('inches');
    const [waist, setWaist] = useState<string>('');
    const [hips, setHips] = useState<string>('');
    const [result, setResult] = useState<SizeRow | null>(null);

    const calculateSize = () => {
        let w = parseFloat(waist);
        let h = parseFloat(hips);

        if (isNaN(w) || isNaN(h)) return;

        if (unit === 'cm') {
            w = w / 2.54;
            h = h / 2.54;
        }

        // Find the best fit. Priority is usually given to hip measurement for panties.
        const foundSize = sizeChart.find(row =>
            (h >= row.hipLow && h <= row.hipHigh) ||
            (h > row.hipHigh && sizeChart.indexOf(row) === sizeChart.length - 1) ||
            (h < row.hipLow && sizeChart.indexOf(row) === 0)
        ) || (h > sizeChart[sizeChart.length - 1].hipHigh ? sizeChart[sizeChart.length - 1] : sizeChart[0]);

        setResult(foundSize);
    };

    const convertValue = (val: number) => {
        return unit === 'cm' ? Math.round(val * 2.54) : val;
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Panty Size Finder</h2>
            <p className={styles.subtitle}>Enter your measurements to find your perfect fit across international sizing systems.</p>

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
                    <label className={styles.label}>Natural Waist</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="e.g. 27"
                            value={waist}
                            onChange={(e) => setWaist(e.target.value)}
                        />
                        <span className={styles.unit}>{unit}</span>
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Fullest Hips</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="e.g. 38"
                            value={hips}
                            onChange={(e) => setHips(e.target.value)}
                        />
                        <span className={styles.unit}>{unit}</span>
                    </div>
                </div>
            </div>

            <button className={styles.calculateBtn} onClick={calculateSize}>
                Find My Size
            </button>

            {result && (
                <div className={styles.resultSection}>
                    <div className={styles.resultHeader}>
                        <span className={styles.resultLabel}>Your Recommended Size</span>
                        <div className={styles.mainSize}>{result.size}</div>
                        <p className={styles.subtitle}>
                            Best fit for Waist: {convertValue(result.waistLow)}-{convertValue(result.waistHigh)}{unit} |
                            Hips: {convertValue(result.hipLow)}-{convertValue(result.hipHigh)}{unit}
                        </p>
                    </div>

                    <div className={styles.conversionGrid}>
                        <div className={styles.conversionItem}>
                            <span className={styles.region}>US / Canada</span>
                            <div className={styles.convertedSize}>{result.us}</div>
                        </div>
                        <div className={styles.conversionItem}>
                            <span className={styles.region}>UK / Ireland</span>
                            <div className={styles.convertedSize}>{result.uk}</div>
                        </div>
                        <div className={styles.conversionItem}>
                            <span className={styles.region}>Europe</span>
                            <div className={styles.convertedSize}>{result.eu}</div>
                        </div>
                        <div className={styles.conversionItem}>
                            <span className={styles.region}>AU / NZ</span>
                            <div className={styles.convertedSize}>{result.au}</div>
                        </div>
                    </div>

                    <div className={styles.tableSection}>
                        <h3 className={styles.tableTitle}>Size Reference Chart</h3>
                        <div style={{ overflowX: 'auto' }}>
                            <table className={styles.chart}>
                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Waist ({unit})</th>
                                        <th>Hips ({unit})</th>
                                        <th>US</th>
                                        <th>UK</th>
                                        <th>EU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sizeChart.map((row) => (
                                        <tr key={row.size} className={result.size === row.size ? styles.activeRow : ''}>
                                            <td>{row.size}</td>
                                            <td>{convertValue(row.waistLow)}-{convertValue(row.waistHigh)}</td>
                                            <td>{convertValue(row.hipLow)}-{convertValue(row.hipHigh)}</td>
                                            <td>{row.us}</td>
                                            <td>{row.uk}</td>
                                            <td>{row.eu}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
