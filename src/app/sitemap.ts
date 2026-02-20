import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const articles = posts.map((post) => ({
        url: `${SITE_URL}/article/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const categories = [
        'luxury-designer',
        'bridal-wedding',
        'shapewear-support',
        'bra-fit-sizing',
        'care-fabric-guide',
    ].map((category) => ({
        url: `${SITE_URL}/category/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const staticPages = [
        '',
        '/about',
        '/privacy-policy',
        '/terms-conditions',
        '/disclaimer',
        '/contact',
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.5,
    }));

    return [...staticPages, ...categories, ...articles];
}
