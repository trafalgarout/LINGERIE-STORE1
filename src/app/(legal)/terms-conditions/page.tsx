import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
    title: `Terms & Conditions - ${SITE_NAME}`,
    description: 'Our terms and conditions governing the use of our website.',
};

import styles from '../legal.module.css';

export default function TermsConditionsPage() {
    return (
        <div className={styles.legalContent}>
            <h1 className={styles.legalTitle}>Terms & Conditions</h1>
            <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className={styles.legalSection}>
                <p>Welcome to <strong>{SITE_NAME}</strong>. These terms and conditions outline the rules and regulations for the use of {SITE_NAME}, located at <a href={SITE_URL}>{SITE_URL}</a>.</p>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use {SITE_NAME} if you do not agree to take all of the terms and conditions stated on this page.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Intellectual Property Rights</h2>
                <p>Other than the content you own, under these Terms, {SITE_NAME} and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
                <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Restrictions</h2>
                <p>You are specifically restricted from all of the following:</p>
                <ul>
                    <li>Publishing any Website material in any other media;</li>
                    <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                    <li>Publicly performing and/or showing any Website material;</li>
                    <li>Using this Website in any way that is or may be damaging to this Website;</li>
                    <li>Using this Website in any way that impacts user access to this Website;</li>
                    <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                    <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website.</li>
                </ul>
            </section>

            <section className={styles.legalSection}>
                <h2>No Warranties</h2>
                <p>This Website is provided "as is," with all faults, and {SITE_NAME} expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Limitation of Liability</h2>
                <p>In no event shall {SITE_NAME}, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. {SITE_NAME}, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way connected with your use of this Website.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Indemnification</h2>
                <p>You hereby indemnify to the fullest extent {SITE_NAME} from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Severability</h2>
                <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Variation of Terms</h2>
                <p>{SITE_NAME} is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>
            </section>

            <section className={styles.legalSection}>
                <h2>Governing Law & Jurisdiction</h2>
                <p>These Terms will be governed by and interpreted in accordance with the laws of the State of New York, and you submit to the non-exclusive jurisdiction of the state and federal courts located in New York for the resolution of any disputes.</p>
            </section>
        </div>
    );
}
