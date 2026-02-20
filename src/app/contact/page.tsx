import { Metadata } from 'next';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/constants';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: `Contact Us - ${SITE_NAME}`,
    description: 'Get in touch with us regarding our lingerie guides and reviews.',
};

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                Whether you have a specific fitting question, feedback on our guides, or interest in partnership, we're here to help.
            </p>

            <div className={styles.contactGrid}>
                <div className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <h3>Editorial Inquiries</h3>
                        <p>For questions regarding our reviews, sizing guides, or to suggest a brand for coverage.</p>
                        <p><strong>Email:</strong> {CONTACT_EMAIL}</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Partnerships</h3>
                        <p>For partnership opportunities, affiliate inquiries, or media requests.</p>
                        <p><strong>Email:</strong> partnerships@lingerieparadise.store</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Response Time</h3>
                        <p>We strive to respond to all inquiries within 24-48 business hours.</p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder="Jane Doe" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input type="email" id="email" name="email" className={styles.input} placeholder="jane@example.com" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>Subject</label>
                            <select id="subject" name="subject" className={styles.input} required>
                                <option value="">Select a subject</option>
                                <option value="fitting">Fitting Advice</option>
                                <option value="review">Review Request</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" name="message" className={styles.textarea} placeholder="How can we help you?" required></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
