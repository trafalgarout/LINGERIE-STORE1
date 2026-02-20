import Link from 'next/link';
import Image from 'next/image';
import styles from './VerticalArticleCard.module.css';

interface VerticalArticleCardProps {
    title: string;
    category: string;
    slug: string;
    image?: string;
    priority?: boolean;
}

export default function VerticalArticleCard({ title, category, slug, image, priority = false }: VerticalArticleCardProps) {
    const displayCategory = category.replace(/-/g, ' ');
    const articleUrl = `/${category}/${slug}`;

    return (
        <article className={styles.card}>
            <Link href={articleUrl} className={styles.imageContainer} aria-label={`Read more about ${title}`}>
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        quality={90}
                        priority={priority}
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.noImage}>No Image</div>
                )}
            </Link>
            <div className={styles.content}>
                <span className={styles.category}>
                    {displayCategory}
                </span>
                <Link href={articleUrl}>
                    <h3 className={styles.title}>{title}</h3>
                </Link>
            </div>
        </article>
    );
}
