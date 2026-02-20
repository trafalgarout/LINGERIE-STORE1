import { SITE_NAME, SITE_URL } from './constants';
import { Post } from './mdx';

export function generateArticleSchema(post: Post) {
    const articleUrl = `${SITE_URL}/article/${post.slug}`;

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.frontmatter.title,
        description: post.frontmatter.excerpt,
        image: post.frontmatter.image ? [`${SITE_URL}${post.frontmatter.image}`] : [],
        datePublished: post.frontmatter.date,
        dateModified: post.frontmatter.date, // Assuming date is updated on modify
        author: {
            '@type': 'Person',
            name: 'Editor', // Could be dynamic if author field exists
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`, // Placeholder
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl,
        },
    };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.item}`,
        })),
    };
}
