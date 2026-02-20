import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
    title: `Privacy Policy - ${SITE_NAME}`,
    description: 'Our privacy policy outlines how we collect, use, and protect your information.',
};

import styles from '../legal.module.css';

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.legalContent}>
            <h1 className={styles.legalTitle}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className={styles.legalSection}>
                <p>
                    At <strong>{SITE_NAME}</strong>, accessible from <a href={SITE_URL}>{SITE_URL}</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {SITE_NAME} and how we use it.
                </p>
                <p>
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
            </section>

            <section className={styles.legalSection}>
                <h2>Consent</h2>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Information We Collect</h2>
                <p>
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p>
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
            </section>

            <section className={styles.legalSection}>
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website.</li>
                    <li>Improve, personalize, and expand our website.</li>
                    <li>Understand and analyze how you use our website.</li>
                    <li>Develop new products, services, features, and functionality.</li>
                    <li>Communicate with you, either directly or through one of our partners.</li>
                    <li>Send you emails if you have opted into our newsletter.</li>
                    <li>Find and prevent fraud.</li>
                </ul>
            </section>

            <section className={styles.legalSection}>
                <h2>Log Files</h2>
                <p>
                    {SITE_NAME} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                </p>
            </section>

            <section className={styles.legalSection}>
                <h2>Cookies and Web Beacons</h2>
                <p>
                    Like any other website, {SITE_NAME} uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>
            </section>

            <section className={styles.legalSection}>
                <h2>Google DoubleClick DART Cookie</h2>
                <p>
                    Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>
                </p>
            </section>

            <section className={styles.legalSection}>
                <h2>Our Advertising Partners</h2>
                <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:</p>
                <ul>
                    <li>Google AdSense</li>
                </ul>
            </section>

            <section className={styles.legalSection}>
                <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                <ul>
                    <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                    <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                    <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                </ul>
            </section>

            <section className={styles.legalSection}>
                <h2>GDPR Data Protection Rights</h2>
                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul>
                    <li>The right to access – You have the right to request copies of your personal data.</li>
                    <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
            </section>
        </div>
    );
}
