'use client';

import React from 'react';
import { motion } from 'framer-motion';
import VerticalArticleCard from '@/components/ui/VerticalArticleCard';
import AdSenseUnit from '@/components/ads/AdSenseUnit';
import styles from '@/app/page.module.css';

const recentArticles = [
    {
        title: "The Silk Edit: Best Luxury Lingerie Brands",
        excerpt: "Discover the top tier lingerie brands that are defining elegance and comfort this year. From French lace to Italian silk, we cover it all.",
        category: "luxury-designer",
        slug: "best-luxury-lingerie-brands",
        date: "February 10, 2026",
        image: "/images/homepage/the-silk-edit.jpeg",
    },
    {
        title: "The Art of the Perfect Fit",
        excerpt: "Stop wearing the wrong size. Our comprehensive guide helps you find your perfect fit with simple tools you have at home.",
        category: "bra-fit-sizing",
        slug: "how-to-measure-bra-size",
        date: "February 12, 2026",
        image: "/images/homepage/the-art-of-perfect-fit.jpeg",
    },
    {
        title: "Eternal Elegance: The Bridal Lingerie Guide",
        excerpt: "Make your special night unforgettable with our curated selection of bridal lingerie, from classic white to modern lace designs.",
        category: "bridal-wedding",
        slug: "best-bridal-lingerie-wedding-night",
        date: "February 14, 2026",
        image: "/images/homepage/eternal-elegance-bridal.jpeg",
    },
    {
        title: "Sculpting Confidence: Modern Shapewear",
        excerpt: "Everything you need to know about waist training. Effectivity, safety concerns, and how to choose the right one for your body.",
        category: "shapewear-support",
        slug: "waist-trainers-pros-cons-safety",
        date: "February 8, 2026",
        image: "/images/homepage/sculpting-confidence.jpeg",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function LatestStories() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <p className={styles.sectionSubtitle}>Journal</p>
                <h2 className={styles.sectionTitle}>Latest Stories</h2>
            </div>

            <motion.div
                className={styles.articleGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {recentArticles.map((article) => (
                    <motion.div key={article.slug} variants={itemVariants}>
                        <VerticalArticleCard
                            title={article.title}
                            category={article.category}
                            slug={article.slug}
                            image={article.image}
                            priority
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <AdSenseUnit slot="0987654321" format="horizontal" label="In-Feed Ad" />
            </div>
        </section>
    );
}
