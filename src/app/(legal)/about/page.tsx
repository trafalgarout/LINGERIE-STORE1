import { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
    title: `About Us - ${SITE_NAME}`,
    description: 'Learn more about LingerieParadise.store and our mission to provide the best lingerie advice.',
};

import styles from '../legal.module.css';

export default function AboutPage() {
    return (
        <div className={styles.legalContent}>
            <h1 className={styles.legalTitle}>About LingerieParadise.store</h1>
            <p className={styles.lead}>
                Welcome to <strong>{SITE_NAME}</strong>, the digital sanctuary for women seeking the perfect fusion of elegance, comfort, and confidence.
            </p>

            <section className={styles.section}>
                <h2>Our Mission</h2>
                <p>
                    At {SITE_NAME}, we believe that lingerie is far more than just a foundation—it is an intimate expression of self. Our mission is to empower women by providing the technical knowledge and stylistic inspiration needed to make informed choices about their most personal wardrobe investments.
                </p>
            </section>

            <section className={styles.section}>
                <h2>The Expertise Behind the Guide</h2>
                <p>
                    In an industry often clouded by marketing myths and confusing sizing standards, {SITE_NAME} stands as a beacon of clarity. Our content is crafted through a lens of three core pillars:
                </p>
                <ul className={styles.expertiseList}>
                    <li>
                        <strong>Technical Bra Fitting:</strong> We move beyond the "plus-four" myths to provide professional-grade advice on finding your true size and shape.
                    </li>
                    <li>
                        <strong>Fabric Integrity:</strong> From the breathability of biological silk to the high-performance engineering of modern shapewear, we analyze the textiles that touch your skin.
                    </li>
                    <li>
                        <strong>Luxury Curation:</strong> We bypass the fast-fashion noise to review heritage and designer brands that prioritize craftsmanship and longevity.
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Our Philosophy</h2>
                <p>
                    We believe in <strong>"The Sustainable Silhouette."</strong> This means investing in fewer, better pieces that respect your body's geometry and stand the test of time. Whether you are preparing for your wedding day, seeking medical-grade post-surgery support, or simply elevating your daily staples, our guides are designed to be your most trusted advisor.
                </p>
            </section>

            <section className={`${styles.section} ${styles.highlight}`}>
                <h2>Editorial Integrity</h2>
                <p>
                    Trust is our most valuable asset. While we participate in affiliate programs and may earn commissions when you purchase through our links, our editorial recommendations are fiercely independent. We only recommend products that meet our rigorous standards for quality, fit, and aesthetic excellence.
                </p>
            </section>

            <p className={styles.finalNote}>
                Thank you for being part of our community. Let us help you find the foundation you've always deserved.
            </p>
        </div>
    );
}
