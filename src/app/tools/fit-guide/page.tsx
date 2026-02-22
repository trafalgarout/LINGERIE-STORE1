import type { Metadata } from 'next';
import FitGuide from '@/components/tools/FitGuide';
import Sidebar from '@/components/layout/Sidebar';
import styles from '../bra-size-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Visual Fit Guide | Bra Fitting Tips & Tricks',
    description: 'Learn how to tell a good fit from a bad fit with our visual guide. Pro tips for band, cup, and strap comfort.',
};

export default function FitGuidePage() {
    return (
        <div className={`container ${styles.pageWrapper}`}>
            <div className={styles.contentGrid}>
                <div className={styles.mainContent}>
                    <FitGuide />
                </div>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
