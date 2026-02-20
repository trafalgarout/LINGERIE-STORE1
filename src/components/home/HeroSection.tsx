'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        const content = contentRef.current;

        if (section && bg && content) {
            // Parallax background (slow zoom and move)
            gsap.to(bg, {
                y: '20%',
                scale: 1.1,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Parallax text (moves up faster than scroll)
            gsap.to(content, {
                y: '-30%',
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" as const }
        }
    };

    return (
        <section ref={sectionRef} className={styles.heroSection}>
            <div ref={bgRef} className={styles.heroBackground}>
                <div className={styles.heroOverlay}></div>
            </div>

            <div ref={contentRef} style={{ position: 'relative', zIndex: 3, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    className={styles.heroContent}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span variants={itemVariants} className={styles.heroTag}>
                        Est. 2026 &mdash; Luxury Lingerie
                    </motion.span>

                    <motion.h1 variants={itemVariants} className={styles.heroTitle}>
                        Discover <br />
                        <span className={styles.heroTitleGold}>Timeless Elegance</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className={styles.heroSubtitle}>
                        Experience the art of the perfect fit.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.ctaContainer}>
                        <Link href="/shop" className={`${styles.glowBtn} btn`}>
                            Shop Collection
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
