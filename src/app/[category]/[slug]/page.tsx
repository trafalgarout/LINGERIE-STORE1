import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import AdSenseUnit from '@/components/ads/AdSenseUnit';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { SITE_NAME } from '@/lib/constants';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import styles from './page.module.css';

interface ArticlePageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug, resolvedParams.category);

    if (!post) {
        return {
            title: 'Validating...',
        };
    }

    return {
        title: `${post.frontmatter.title} - ${SITE_NAME}`,
        description: post.frontmatter.excerpt,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.excerpt,
            images: post.frontmatter.image ? [post.frontmatter.image] : [],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        category: post.category,
        slug: post.slug,
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug, resolvedParams.category);

    if (!post) {
        notFound();
    }

    const articleSchema = generateArticleSchema(post);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', item: '/' },
        { name: post.category.replace(/-/g, ' '), item: `/${post.category}` },
        { name: post.frontmatter.title, item: `/${post.category}/${post.slug}` },
    ]);

    return (
        <div className={`container ${styles.container}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className={styles.contentWrapper}>
                <article className={styles.articleMain}>
                    <header className={styles.articleHeader}>
                        <span className={styles.categoryTag}>{post.category.replace(/-/g, ' ')}</span>
                        <h1 className={styles.title}>{post.frontmatter.title}</h1>
                        <div className={styles.meta}>
                            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                            {/* Optional: Add reading time or author */}
                        </div>
                    </header>

                    {/* Featured Image */}
                    {post.frontmatter.image && (
                        <div className={styles.featuredImage}>
                            <Image
                                src={post.frontmatter.image}
                                alt={post.frontmatter.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                                priority
                            />
                        </div>
                    )}

                    {/* Top Ad */}
                    <AdSenseUnit slot="1111111111" format="horizontal" label="Article Top Ad" />

                    {/* Content */}
                    <div className={styles.articleContent}>
                        <MDXRemote
                            source={post.content}
                            components={{ AdSenseUnit }}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                },
                            }}
                        />
                    </div>

                    {/* Bottom Ad */}
                    <AdSenseUnit slot="2222222222" format="horizontal" label="Article Bottom Ad" />
                </article>


            </div>
        </div>
    );
}
