'use client';

import React, { useState } from 'react';
import styles from './StyleQuiz.module.css';

interface Question {
    text: string;
    options: {
        text: string;
        persona: string;
    }[];
}

const questions: Question[] = [
    {
        text: "What's your ideal evening?",
        options: [
            { text: "A candlelit dinner with soft piano music", persona: "The Romantic" },
            { text: "Wine tasting at an exclusive gallery", persona: "The Connoisseur" },
            { text: "A cozy movie night in with organic tea", persona: "The Natural" },
            { text: "Dancing at a hidden underground club", persona: "The Provocateur" },
        ]
    },
    {
        text: "Which color speaks to you?",
        options: [
            { text: "Blush pink and soft pastels", persona: "The Romantic" },
            { text: "Deep emerald and royal gold", persona: "The Connoisseur" },
            { text: "Heather grey and earthy linen", persona: "The Natural" },
            { text: "Midnight black and crimson red", persona: "The Provocateur" },
        ]
    },
    {
        text: "What's your style motto?",
        options: [
            { text: "Love is in the details", persona: "The Romantic" },
            { text: "Quality over everything", persona: "The Connoisseur" },
            { text: "Comfort is my superpower", persona: "The Natural" },
            { text: "Confidence is the best outfit", persona: "The Provocateur" },
        ]
    },
    {
        text: "Preferred fabric?",
        options: [
            { text: "French Chantilly lace", persona: "The Romantic" },
            { text: "Mulberry silk satin", persona: "The Connoisseur" },
            { text: "Organic pima cotton", persona: "The Natural" },
            { text: "Sheer mesh and leather accents", persona: "The Provocateur" },
        ]
    }
];

const personaData: Record<string, { desc: string; recs: { type: string; name: string }[] }> = {
    "The Romantic": {
        desc: "You find beauty in delicate details, floral embroidery, and soft silhouettes. Your lingerie drawer is a sanctuary of lace and dreams.",
        recs: [
            { type: "Bralette", name: "Chantilly Lace Triangle" },
            { type: "Sleepwear", name: "Silk Slip with Lace Trim" }
        ]
    },
    "The Connoisseur": {
        desc: "You appreciate the finer things in life. Impeccable tailoring, the heaviest silk weight, and timeless luxury are your signatures.",
        recs: [
            { type: "Balconette", name: "Premium Silk Underwire" },
            { type: "Accessory", name: "Silk Robe with Sash" }
        ]
    },
    "The Natural": {
        desc: "Minimalism and comfort drive your choices. You look for breathable fabrics and supportive cuts that feel like a second skin.",
        recs: [
            { type: "Seamless", name: "Organic Cotton Wireless" },
            { type: "Daily Wear", name: "Smooth Microfiber T-Shirt Bra" }
        ]
    },
    "The Provocateur": {
        desc: "You aren't afraid to make a statement. Bold cut-outs, strappy details, and a high-fashion edge define your powerful style.",
        recs: [
            { type: "Bodysuit", name: "Sheer Strappy Mesh Powerhouse" },
            { type: "Basque", name: "Bondage-Inspired Garter Set" }
        ]
    }
};

export default function StyleQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<string | null>(null);

    const handleOption = (persona: string) => {
        const newAnswers = [...answers, persona];
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Calculate result
            const counts: Record<string, number> = {};
            newAnswers.forEach(p => counts[p] = (counts[p] || 0) + 1);

            const winner = Object.keys(counts).reduce((a, b) =>
                counts[a] >= counts[b] ? a : b
            );
            setResult(winner);
        }
    };

    const reset = () => {
        setCurrentStep(0);
        setAnswers([]);
        setResult(null);
    };

    if (result) {
        const data = personaData[result];
        return (
            <div className={styles.wrapper}>
                <div className={styles.resultsSection}>
                    <span className={styles.resultTitle}>Your Style Profile</span>
                    <h2 className={styles.personaName}>{result}</h2>
                    <p className={styles.personaDesc}>{data.desc}</p>

                    <div className={styles.recsContainer}>
                        <h3 className={styles.recsTitle}>Curated Recommendations</h3>
                        <div className={styles.recsList}>
                            {data.recs.map((rec, i) => (
                                <div key={i} className={styles.recCard}>
                                    <span className={styles.recType}>{rec.type}</span>
                                    <div className={styles.recName}>{rec.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className={styles.resetBtn} onClick={reset}>Retake the Quiz</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Lingerie Style Quiz</h2>

            <div className={styles.progressContainer}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${((currentStep) / questions.length) * 100}%` }}
                />
            </div>

            <div className={styles.questionSection}>
                <h3 className={styles.question}>{questions[currentStep].text}</h3>
                <div className={styles.optionsGrid}>
                    {questions[currentStep].options.map((opt, i) => (
                        <button
                            key={i}
                            className={styles.optionBtn}
                            onClick={() => handleOption(opt.persona)}
                        >
                            {opt.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
