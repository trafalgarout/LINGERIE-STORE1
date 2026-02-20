import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import ArticleCard from '@/components/ui/ArticleCard';
import VerticalArticleCard from '@/components/ui/VerticalArticleCard';
import { getPostsByCategory } from '@/lib/mdx';
import { SITE_NAME } from '@/lib/constants';
import styles from './page.module.css';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const categoryName = resolvedParams.category.replace(/-/g, ' ');
    const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    return {
        title: `${title} - ${SITE_NAME}`,
        description: `Explore our latest articles and guides on ${categoryName}.`,
        openGraph: {
            title: `${title} - ${SITE_NAME}`,
            description: `Explore our latest articles and guides on ${categoryName}.`,
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const posts = getPostsByCategory(resolvedParams.category);
    const categoryName = resolvedParams.category.replace(/-/g, ' ');

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.header}>
                <h1 className={styles.title}>{categoryName}</h1>
                <p className={styles.description}>
                    Discover expert advice, reviews, and guides in {categoryName}.
                </p>
            </div>

            <div className={styles.contentWrapper}>
                <main>
                    {posts.length > 0 ? (
                        <div className={styles.masonryGrid}>
                            {posts.map((post) => (
                                <VerticalArticleCard
                                    key={post.slug}
                                    title={post.frontmatter.title}
                                    category={resolvedParams.category}
                                    slug={post.slug}
                                    image={post.frontmatter.image}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noPosts}>
                            <p>No articles found in this category.</p>
                        </div>
                    )}
                </main>

            </div>
        </div>
    );
}
