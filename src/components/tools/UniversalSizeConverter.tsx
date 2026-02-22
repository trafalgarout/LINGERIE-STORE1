'use client';

import React, { useState } from 'react';
import styles from './UniversalSizeConverter.module.css';

type System = 'US' | 'UK' | 'EU' | 'AU' | 'FR' | 'IT';
type Category = 'bra' | 'panty';

const braSizes = [
    { US: '32A', UK: '32A', EU: '70A', AU: '10A', FR: '85A', IT: '1' },
    { US: '32B', UK: '32B', EU: '70B', AU: '10B', FR: '85B', IT: '1' },
    { US: '34A', UK: '34A', EU: '75A', AU: '12A', FR: '90A', IT: '2' },
    { US: '34B', UK: '34B', EU: '75B', AU: '12B', FR: '90B', IT: '2' },
    { US: '34C', UK: '34C', EU: '75C', AU: '12C', FR: '90C', IT: '2' },
    { US: '36B', UK: '36B', EU: '80B', AU: '14B', FR: '95B', IT: '3' },
    { US: '36C', UK: '36C', EU: '80C', AU: '14C', FR: '95C', IT: '3' },
    { US: '36D', UK: '36D', EU: '80D', AU: '14D', FR: '95D', IT: '3' },
    { US: '38C', UK: '38C', EU: '85C', AU: '16C', FR: '100C', IT: '4' },
    { US: '38D', UK: '38D', EU: '85D', AU: '16D', FR: '100D', IT: '4' },
];

const pantySizes = [
    { US: 'XS', UK: '4-6', EU: '32-34', AU: '4-6', FR: '34-36', IT: '0-I' },
    { US: 'S', UK: '8-10', EU: '36-38', AU: '8-10', FR: '38-40', IT: 'I-II' },
    { US: 'M', UK: '12-14', EU: '40-42', AU: '12-14', FR: '42-44', IT: 'III-IV' },
    { US: 'L', UK: '16-18', EU: '44-46', AU: '16-18', FR: '46-48', IT: 'V-VI' },
    { US: 'XL', UK: '20-22', EU: '48-50', AU: '20-22', FR: '50-52', IT: 'VII' },
];

export default function UniversalSizeConverter() {
    const [category, setCategory] = useState<Category>('bra');
    const [fromSystem, setFromSystem] = useState<System>('US');
    const [toSystem, setToSystem] = useState<System>('UK');
    const [selectedValue, setSelectedValue] = useState('');

    const currentData = category === 'bra' ? braSizes : pantySizes;
    const systems: System[] = ['US', 'UK', 'EU', 'AU', 'FR', 'IT'];

    const getOptions = () => {
        return Array.from(new Set(currentData.map(d => d[fromSystem])));
    };

    const getConversion = (sys: System) => {
        const match = currentData.find(d => d[fromSystem] === selectedValue);
        return match ? match[sys] : '—';
    };

    const swapSystems = () => {
        const temp = fromSystem;
        setFromSystem(toSystem);
        setToSystem(temp);
        setSelectedValue('');
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Universal Size Converter</h2>
            <p className={styles.subtitle}>Instantly convert between international sizing systems with precision.</p>

            <div className={styles.typeToggle}>
                <button
                    className={`${styles.typeBtn} ${category === 'bra' ? styles.typeBtnActive : ''}`}
                    onClick={() => { setCategory('bra'); setSelectedValue(''); }}
                >
                    Bra Sizes
                </button>
                <button
                    className={`${styles.typeBtn} ${category === 'panty' ? styles.typeBtnActive : ''}`}
                    onClick={() => { setCategory('panty'); setSelectedValue(''); }}
                >
                    Panty Sizes
                </button>
            </div>

            <div className={styles.converterBody}>
                <div className={styles.inputCard}>
                    <span className={styles.cardLabel}>From {fromSystem} System</span>
                    <select
                        className={styles.select}
                        value={fromSystem}
                        onChange={(e) => { setFromSystem(e.target.value as System); setSelectedValue(''); }}
                    >
                        {systems.map(s => <option key={s} value={s}>{s} Standard</option>)}
                    </select>

                    <div style={{ marginTop: '20px' }}>
                        <span className={styles.cardLabel}>Select Your Size</span>
                        <select
                            className={styles.select}
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                        >
                            <option value="">Choose size...</option>
                            {getOptions().map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                </div>

                <button className={styles.swapBtn} onClick={swapSystems} title="Swap Systems">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 16l-4-4 4-4M17 8l4 4-4 4M3 12h18" />
                    </svg>
                </button>

                <div className={styles.inputCard}>
                    <span className={styles.cardLabel}>To {toSystem} System</span>
                    <select
                        className={styles.select}
                        value={toSystem}
                        onChange={(e) => setToSystem(e.target.value as System)}
                    >
                        {systems.map(s => <option key={s} value={s}>{s} Standard</option>)}
                    </select>

                    <div style={{ marginTop: '45px', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', fontWeight: 700 }}>Converted Size</div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#d4af37' }}>
                            {selectedValue ? getConversion(toSystem) : '—'}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.resultTitle}>International Reference Guide</div>
            <div className={styles.conversionRow}>
                {systems.filter(s => s !== fromSystem && s !== toSystem).map(s => (
                    <div key={s} className={styles.convBox}>
                        <div className={styles.boxRegion}>{s}</div>
                        <div className={styles.boxValue}>{selectedValue ? getConversion(s) : '—'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
