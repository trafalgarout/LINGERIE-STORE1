import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const recentArticles = [
    { title: "The Ultimate Guide to Silk Lingerie", href: "/care-fabric-guide/silk-lingerie-care-guide" },
    { title: "Finding Your Perfect Bridal Match", href: "/bridal-wedding/bridal-lingerie-selection-guide" },
    { title: "Modern Shapewear: Style & Function", href: "/shapewear-support/modern-shapewear-guide" },
];

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Featured Collection</h3>
                <div className={styles.featuredBox}>
                    <p className={styles.featuredText}>Discover the latest in luxury lace and designer sets.</p>
                    <Link href="/shop" className="btn btn-primary" style={{ width: '100%', padding: '0.6rem' }}>
                        Shop Collection
                    </Link>
                </div>
            </div>

            <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Recent Guides</h3>
                <ul className={styles.articleList}>
                    {recentArticles.map((article, index) => (
                        <li key={index} className={styles.articleItem}>
                            <Link href={article.href} className={styles.articleLink}>
                                {article.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.widget}>
                <h3 className={styles.widgetTitle}>Stay Connected</h3>
                <p className={styles.widgetDesc}>Get exclusive styling tips and early access to designer drops.</p>
                <div className={styles.newsletter}>
                    <input type="email" placeholder="Email address" className={styles.input} />
                    <button className="btn btn-outline" style={{ width: '100%', marginTop: '0.5rem' }}>Join Now</button>
                </div>
            </div>
        </div>
    );
}
