import styles from './legal.module.css';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.legalWrapper} style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <div className="prose">
        {children}
      </div>
    </div>
  );
}
