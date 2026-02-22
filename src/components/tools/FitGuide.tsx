'use client';

import React, { useState } from 'react';
import styles from './FitGuide.module.css';

interface FitCategory {
    id: string;
    title: string;
    good: {
        desc: string;
        indicator: string;
    };
    bad: {
        desc: string;
        indicator: string;
    };
    tips: string[];
}

const categories: FitCategory[] = [
    {
        id: 'band',
        title: 'Band Fit',
        good: {
            desc: "The band sits level and parallel to the ground all the way around. You can slide two fingers underneath it comfortably.",
            indicator: "Level & Secure Alignment"
        },
        bad: {
            desc: "The band arches up between the shoulder blades or feels loose enough to slide around. This often means the band size is too large.",
            indicator: "Arched Upwards / Riding Up"
        },
        tips: [
            "Always start on the loosest hook.",
            "The band provides 80% of the support.",
            "If it rides up, try one band size smaller."
        ]
    },
    {
        id: 'cup',
        title: 'Cup Fit',
        good: {
            desc: "Breasts are fully contained within the cups without any gaps or overflow. The wire sits flush against your ribcage.",
            indicator: "Smooth Seamless Transition"
        },
        bad: {
            desc: "Visible 'quadra-boob' over the top, or significant gaps/wrinkling in the fabric. This indicates the cup size is incorrect.",
            indicator: "Overflow or Gapping Fabric"
        },
        tips: [
            "Use the 'Scoop and Swoop' method.",
            "Wires should never sit on breast tissue.",
            "Gapping can actually mean the cup is too small for some shapes."
        ]
    },
    {
        id: 'strap',
        title: 'Strap Fit',
        good: {
            desc: "Straps sit securely on the shoulders without digging in or slipping off. They support about 10-20% of breast weight.",
            indicator: "Flush Resting / No Digging"
        },
        bad: {
            desc: "Straps leave deep red indentations (too tight) or constantly fall off the shoulders (too loose/straps set too wide).",
            indicator: "Red Marks or Sliding Off"
        },
        tips: [
            "Straps should only lift the cup shape.",
            "Adjust straps every few washes.",
            "If they still dig in, your band is likely too big."
        ]
    },
    {
        id: 'gore',
        title: 'Center Gore',
        good: {
            desc: "The center 'gore' (the bridge between the cups) lies completely flat against your sternum/chest bone.",
            indicator: "Flush Against Sternum"
        },
        bad: {
            desc: "The gore 'floats' away from the body or presses painfully into the breast tissue instead of the bone.",
            indicator: "Floating / Not Touching Skin"
        },
        tips: [
            "Wireless bras may not 'tack' (lie flat).",
            "A floating gore usually means cups are too small.",
            "If it digs in, your gore might be too wide."
        ]
    }
];

export default function FitGuide() {
    const [activeIdx, setActiveIdx] = useState(0);
    const category = categories[activeIdx];

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Visual Fit Guide</h2>

            <div className={styles.navContainer}>
                {categories.map((cat, i) => (
                    <button
                        key={cat.id}
                        className={`${styles.navBtn} ${activeIdx === i ? styles.navBtnActive : ''}`}
                        onClick={() => setActiveIdx(i)}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            <div className={styles.mainDisplay}>
                <div className={`${styles.fitCard} ${styles.goodFit}`}>
                    <div className={styles.statusHeader}>
                        <div className={`${styles.statusIcon} ${styles.goodIcon}`}>✓</div>
                        <span className={`${styles.statusText} ${styles.goodText}`}>Good Fit</span>
                    </div>
                    <div className={styles.visualBox}>
                        <div style={{ color: '#38a169', fontWeight: 800, fontSize: '1.2rem' }}>{category.good.indicator}</div>
                    </div>
                    <p className={styles.description}>{category.good.desc}</p>
                </div>

                <div className={`${styles.fitCard} ${styles.badFit}`}>
                    <div className={styles.statusHeader}>
                        <div className={`${styles.statusIcon} ${styles.badIcon}`}>×</div>
                        <span className={`${styles.statusText} ${styles.badText}`}>Bad Fit</span>
                    </div>
                    <div className={styles.visualBox}>
                        <div style={{ color: '#e53e3e', fontWeight: 800, fontSize: '1.2rem' }}>{category.bad.indicator}</div>
                    </div>
                    <p className={styles.description}>{category.bad.desc}</p>
                </div>
            </div>

            <div className={styles.proTipsBox}>
                <h3 className={styles.proTipsTitle}>
                    <span style={{ color: '#d4af37' }}>✨</span> Professional Fitting Tips
                </h3>
                <div className={styles.proTipsList}>
                    {category.tips.map((tip, i) => (
                        <div key={i} className={styles.tipItem}>
                            <span className={styles.tipBullet}>•</span>
                            {tip}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
