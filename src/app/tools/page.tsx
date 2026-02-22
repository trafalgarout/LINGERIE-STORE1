import type { Metadata } from 'next';
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';
import { TOOL_LINKS } from '@/lib/constants';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Expert Lingerie Tools | Fitting, Style & Conversion',
    description: 'Explore our suite of expert lingerie tools including size calculators, personality quizzes, and fit guides.',
};

const toolData = [
    {
        name: "Bra Size Calculator",
        href: "/tools/bra-size-calculator",
        desc: "Find your perfect bra size with our high-precision measurement tool.",
        icon: "📏"
    },
    {
        name: "Panty Size Finder",
        href: "/tools/panty-size-finder",
        desc: "Waist and hip measurement tools for perfect-fitting intimates.",
        icon: "🎀"
    },
    {
        name: "Lingerie Style Quiz",
        href: "/tools/style-quiz",
        desc: "Discover your signature look—The Romantic, Connoisseur, or Provocateur.",
        icon: "✨"
    },
    {
        name: "Visual Fit Guide",
        href: "/tools/fit-guide",
        desc: "A comparative tool to troubleshoot your fit and ensure maximum comfort.",
        icon: "👁️"
    },
    {
        name: "Universal Size Converter",
        href: "/tools/size-converter",
        desc: "Seamlessly convert between US, UK, EU, and other international systems.",
        icon: "🌐"
    }
];

export default function ToolsLandingPage() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1 className={styles.title}>Expert Lingerie Tools</h1>
                <p className={styles.subtitle}>
                    Precision engineering meets intimate comfort. Use our professional-grade tools
                    to master your fit, find your style, and browse with confidence.
                </p>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.mainContent}>
                    <div className={styles.toolsList}>
                        {toolData.map(tool => (
                            <Link key={tool.href} href={tool.href} className={styles.toolCard}>
                                <div className={styles.toolIcon}>{tool.icon}</div>
                                <div className={styles.toolInfo}>
                                    <h2 className={styles.toolName}>{tool.name}</h2>
                                    <p className={styles.toolDesc}>{tool.desc}</p>
                                    <span className={styles.toolLink}>Open Tool &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
