import type { Metadata } from 'next';
import UniversalSizeConverter from '@/components/tools/UniversalSizeConverter';
import Sidebar from '@/components/layout/Sidebar';
import styles from '../bra-size-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Universal Size Converter | International Lingerie Sizing',
    description: 'Convert bra and panty sizes between US, UK, EU, AU, FR, and IT systems instantly.',
};

export default function SizeConverterPage() {
    return (
        <div className={`container ${styles.pageWrapper}`}>
            <div className={styles.contentGrid}>
                <div className={styles.mainContent}>
                    <UniversalSizeConverter />
                </div>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
