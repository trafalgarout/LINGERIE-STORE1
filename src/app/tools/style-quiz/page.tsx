import type { Metadata } from 'next';
import StyleQuiz from '@/components/tools/StyleQuiz';
import Sidebar from '@/components/layout/Sidebar';
import styles from '../bra-size-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Lingerie Style Quiz | Discover Your Signature Look',
    description: 'Take our 4-question style quiz to find your lingerie persona and get personalized designer recommendations.',
};

export default function StyleQuizPage() {
    return (
        <div className={`container ${styles.pageWrapper}`}>
            <div className={styles.contentGrid}>
                <div className={styles.mainContent}>
                    <StyleQuiz />
                </div>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
