'use client'

import ContactDetails from "../ContactDetails/ContactDetails";
import ContactForm from "../ContactForm/ContactForm";
import FadeInSection from "../FadeInSection/FadeInSection";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center text-dark w-full
            pb-14 px-[6vw] md:px-[4vw]"
        >
            <FadeInSection>
                <h2 className="font-freight-display-pro-light text-[clamp(1.875rem,3.7vw,3rem)] mb-2">
                    Contact
                </h2>
            </FadeInSection >
            <FadeInSection delay={200}>
                <p className="font-freight-display-pro-light text-center text-[clamp(1.5rem,2.2vw,2.2rem)] sm:text-[clamp(1.6rem,3vw,2.4rem)] text-muted max-w-xl ">
                    Take the first step toward your healing!
                </p>
            </FadeInSection >
            <FadeInSection delay={300} className="w-full">
                <div className="flex flex-col items-center lg:flex-row lg:items-start w-full justify-center gap-8 md:gap-12 lg:pt-8">
                    <ContactDetails />
                    <FadeInSection delay={400}>
                        <ContactForm />
                    </FadeInSection>
                </div>
            </FadeInSection >

        </section >
    );
};

export default Contact;