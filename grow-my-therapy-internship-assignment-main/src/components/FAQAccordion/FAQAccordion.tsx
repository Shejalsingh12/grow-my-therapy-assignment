"use client"

import { useState } from "react";
import FadeInSection from "../FadeInSection/FadeInSection";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?",
            answer:
                "CBT-I typically includes 6–8 sessions focused on identifying and changing sleep-disrupting thoughts and behaviors. It combines techniques like sleep restriction, stimulus control, and cognitive restructuring to help improve both the quality and quantity of your sleep.",
        },
        {
            question: "Do you treat children or adolescents?",
            answer:
                "Dr. Blake’s practice primarily focuses on working with adults. However, adolescents aged 16 and older may be considered on a case-by-case basis depending on the concerns and needs.",
        },
        {
            question: "Which geographic regions do you serve?",
            answer:
                "Dr. Blake is licensed to provide therapy to clients located in California. Virtual sessions are available throughout the state, while in-person appointments are held in Los Angeles.",
        },
        {
            question: "Do you offer in-person sessions?",
            answer:
                "Yes. In-person therapy is available at Dr. Blake’s office located on Maplewood Drive in Los Angeles. Virtual sessions are also available for your convenience and flexibility.",
        },
        {
            question: "What technology do we use for virtual sessions?",
            answer:
                'Virtual sessions are conducted securely through Zoom. A private, HIPAA-compliant link is shared with clients prior to each session to ensure confidentiality and ease of access.',
        },
    ];

    return (
        <div className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
                <div key={idx}>
                    <FadeInSection delay={idx * 50}>
                        <div className="border-b border-primary">
                            <button
                                className="w-full text-left py-3 xs:py-4 xs:text-lg md:text-xl flex justify-between items-center transition-colors hover:text-primary focus:outline-none font-freight-sans-pro"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-panel-${idx}`}
                            >
                                {faq.question}
                                <span
                                    className={`ml-2 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                id={`faq-panel-${idx}`}
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                aria-hidden={openIndex !== idx}
                            >
                                <div className="pb-3 xs:pb-4 xs:text-lg text-dark font-freight-sans-pro-light">{faq.answer}</div>
                            </div>
                        </div>
                    </FadeInSection >
                </div>
            ))}
        </div>
    );
}

export default FAQAccordion;