import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
    title: string;
    excerpt: string;
    category: string;
    slug: string;
    image?: string;
    date?: string;
}

export default function ArticleCard({ title, excerpt, category, slug, image, date }: ArticleCardProps) {
    // Format category for display (remove hyphens, capitalize)
    const displayCategory = category.replace(/-/g, ' ');

    // Construct URL
    const href = `/${category}/${slug}`;
    // User requested "SEO-friendly URLs". Usually /category/slug is good.
    // But plan said "Implement Article Page Template".

    return (
        <article className={styles.card}>
            <Link href={href} className={styles.imageContainer} aria-label={`Read more about ${title}`}>
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.image}
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }} />
                )}
            </Link>
            <div className={styles.content}>
                <Link href={`/${category}`} className={styles.category}>
                    {displayCategory}
                </Link>
                <Link href={href}>
                    <h3 className={styles.title}>{title}</h3>
                </Link>
                <p className={styles.excerpt}>{excerpt}</p>
                <div className={styles.meta}>
                    {date && <time>{date}</time>}
                    <Link href={href} className={styles.readMore}>Read More &rarr;</Link>
                </div>
            </div>
        </article>
    );
}
