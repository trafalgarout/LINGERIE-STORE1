import Link from 'next/link';
import { SITE_DESCRIPTION, NAV_LINKS, COMPANY_LINKS, LEGAL_LINKS, TOOL_LINKS, CONTACT_EMAIL, SITE_NAME } from '@/lib/constants';
import Logo from '@/components/ui/Logo';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <Logo className={styles.logo} />
                    <p className={styles.description}>{SITE_DESCRIPTION}</p>
                    <div className={styles.social}>
                        {/* Social Icons would go here */}
                        {/* Placeholder until icons are added */}
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>Explore</h4>
                    <ul className={styles.links}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Tools</h4>
                    <ul className={styles.links}>
                        {TOOL_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Company</h4>
                    <ul className={styles.links}>
                        {COMPANY_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Legal</h4>
                    <ul className={styles.links}>
                        {LEGAL_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Support</h4>
                    <ul className={styles.links}>
                        <li>
                            <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
                        </li>
                        <li>
                            <Link href="/contact">Support Form</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`container ${styles.copyright}`}>
                <p>
                    &copy; {currentYear} {SITE_NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
