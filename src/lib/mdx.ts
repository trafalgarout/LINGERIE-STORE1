import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Post {
    slug: string;
    category: string;
    frontmatter: {
        title: string;
        date: string;
        excerpt: string;
        image?: string;
        keywords?: string[];
        [key: string]: any;
    };
    content: string;
}

export function getPostSlugs(category: string) {
    const categoryPath = path.join(contentDirectory, category);
    if (!fs.existsSync(categoryPath)) {
        return [];
    }
    return fs.readdirSync(categoryPath).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string, category: string): Post | null {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            category,
            frontmatter: {
                title: data.title,
                date: data.date ? new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
                excerpt: data.excerpt,
                image: data.image,
                ...data,
            },
            content,
        };
    } catch (e) {
        return null;
    }
}

export function getAllPosts(): Post[] {
    // Get all categories (subdirectories)
    if (!fs.existsSync(contentDirectory)) return [];

    const categories = fs.readdirSync(contentDirectory).filter(file => {
        return fs.statSync(path.join(contentDirectory, file)).isDirectory();
    });

    let allPosts: Post[] = [];

    categories.forEach((category) => {
        const slugs = getPostSlugs(category);
        slugs.forEach((slug) => {
            const post = getPostBySlug(slug, category);
            if (post) {
                allPosts.push(post);
            }
        });
    });

    // Sort posts by date in descending order
    return allPosts.sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
}

export function getPostsByCategory(category: string): Post[] {
    const slugs = getPostSlugs(category);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, category))
        .filter((post): post is Post => post !== null)
        .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));

    return posts;
}
