'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './CollectionGrid.module.css';

const categories = [
    { name: "Luxury & Designer", href: "/luxury-designer", image: "/images/homepage/luxury-designer.jpeg" },
    { name: "Bridal & Wedding", href: "/bridal-wedding", image: "/images/homepage/bridal-wedding.jpeg" },
    { name: "Fit & Sizing", href: "/bra-fit-sizing", image: "/images/homepage/fit-sizing.jpeg" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function CollectionGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <p className={styles.sectionSubtitle}>Selections</p>
                <h2 className={styles.sectionTitle}>Curated Collections</h2>
            </div>

            <motion.div
                className={styles.gridContainer}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {categories.map((cat) => (
                    <motion.div key={cat.href} variants={cardVariants} className={styles.cardWrapper}>
                        <Link href={cat.href} className={styles.categoryCard}>
                            <div
                                className={styles.cardImage}
                                style={{ backgroundImage: `url(${cat.image})` }}
                            />
                            <div className={styles.cardOverlay}></div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.categoryTitle}>{cat.name}</h3>
                                <div className={styles.linkWrapper}>
                                    <span className={styles.categoryLink}>Discover</span>
                                    <span className={styles.goldLine}></span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
