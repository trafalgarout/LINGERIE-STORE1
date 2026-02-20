import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
    title: `Disclaimer - ${SITE_NAME}`,
    description: 'Our disclaimer regarding affiliate links and general information.',
};

import styles from '../legal.module.css';

export default function DisclaimerPage() {
    return (
        <div className={styles.legalContent}>
            <h1 className={styles.legalTitle}>Disclaimer</h1>
            <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className={styles.legalSection}>
                <h2>General Disclaimer</h2>
                <p>The information provided by <strong>{SITE_NAME}</strong> ("we," "us," or "our") on <a href={SITE_URL}>{SITE_URL}</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
                <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Affiliate Disclosure</h2>
                <p>The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include, but are not limited to:</p>
                <ul>
                    <li>Amazon Services LLC Associates Program</li>
                    <li>ShareASale</li>
                    <li>Awin (Affiliate Window)</li>
                    <li>Impact Radius</li>
                    <li>Others</li>
                </ul>
                <p>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn advertising fees by linking to Amazon.com and affiliated websites.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>External Links Disclaimer</h2>
                <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Professional Disclaimer</h2>
                <p>The Site cannot and does not contain medical/health/fitting advice. The fashion and fitting information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical or health advice. The use or reliance of any information contained on the Site is solely at your own risk.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Testimonials Disclaimer</h2>
                <p>The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.</p>
            </section>
        </div>
    );
}
