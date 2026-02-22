import type { Metadata } from 'next';
import PantySizeFinder from '@/components/tools/PantySizeFinder';
import Sidebar from '@/components/layout/Sidebar';
import styles from '../bra-size-calculator/page.module.css'; // Reusing layout styles

export const metadata: Metadata = {
    title: 'Panty Size Finder | International Size Converter',
    description: 'Find your perfect panty size with our waist and hip measurement tool. Support for US, UK, EU, and AU sizing.',
};

export default function PantySizeFinderPage() {
    return (
        <div className={`container ${styles.pageWrapper}`}>
            <div className={styles.contentGrid}>
                <div className={styles.mainContent}>
                    <PantySizeFinder />
                </div>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
