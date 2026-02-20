import type { Metadata } from 'next';
import BraSizeCalculator from '@/components/tools/BraSizeCalculator';
import Sidebar from '@/components/layout/Sidebar';
import AdSenseUnit from '@/components/ads/AdSenseUnit';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Bra Size Calculator | Find Your Perfect Fit Online',
    description: 'Calculate your perfect bra size in seconds with our interactive calculator. Supports US, UK, and EU size conversions. Get a free personalized fit guide.',
    keywords: 'bra size calculator, calculate bra size online, bra fit guide, lingerie size tool, bra size converter US UK EU',
};

export default function BraSizeCalculatorPage() {
    return (
        <div className={`container ${styles.pageWrapper}`}>
            <div className={styles.contentGrid}>
                <div className={styles.mainContent}>
                    <section className={styles.toolSection}>
                        <BraSizeCalculator />
                    </section>

                    <section className={styles.articleSection}>
                        <h2>Why Correct Lingerie Fit Matters</h2>
                        <p>
                            Did you know that over 80% of women are wearing the wrong bra size? Wearing an ill-fitting bra
                            doesn&apos;t just cause discomfort—it can impact your posture, cause back pain, and reduce the
                            lifespan of your lingerie.
                        </p>

                        <AdSenseUnit slot="6434061346" format="auto" className={styles.adSpace} />

                        <h3>The Science of the Perfect Fit</h3>
                        <p>
                            Our Bra Size Calculator uses contemporary sizing standards adopted by leading luxury brands
                            worldwide. By measuring both your underbust and your fullest bust, we can calculate the
                            precise ratio that determines your band and cup size.
                        </p>

                        <div className={styles.fitGrid}>
                            <div className={styles.fitCard}>
                                <h4>The Band</h4>
                                <p>The band provides 80% of the support. If it slides up your back, it&apos;s too big. If it leaves red marks, it might be too small.</p>
                            </div>
                            <div className={styles.fitCard}>
                                <h4>The Cups</h4>
                                <p>Your breasts should wait comfortably in the cups without spilling over the top or having gaps at the bottom.</p>
                            </div>
                        </div>

                        <AdSenseUnit slot="6367871917" format="auto" className={styles.adSpace} />

                        <h3>Size Conversion Explained</h3>
                        <p>
                            Sizing varies significantly between regions. While a size 34D is common in the **United States**,
                            that same fit would be labeled differently in **Europe (75D)** or **France (90D)**. Our tool
                            provides these conversions instantly to make international shopping effortless.
                        </p>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
