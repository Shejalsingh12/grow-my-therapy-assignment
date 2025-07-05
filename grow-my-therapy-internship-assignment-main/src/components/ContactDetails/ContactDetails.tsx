import FadeInSection from "../FadeInSection/FadeInSection"

const ContactDetails = () => {
    return (
        <ul className="flex flex-col items-center p-6 gap-4 max-w-full sm:max-w-sm text-center w-full text-dark font-freight-display-pro">
            <li className="mt-2">
                <FadeInSection>
                    <p className="font-bold text-xl xs:text-2xl">Dr. Serena Blake, PsyD</p>
                </FadeInSection>
                <FadeInSection delay={50}>
                    <p className="text-muted text-lg">Clinical Psychologist</p>
                </FadeInSection>
            </li>
            <li>
                <FadeInSection delay={100}>
                    <span className="block font-semibold text-xl sm:text-2xl">Location:</span>
                </FadeInSection>
                <FadeInSection delay={150}>
                    <span className="font-freight-sans-pro">1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
                </FadeInSection>
            </li >
            <li>
                <FadeInSection delay={200}>
                    <span className="block font-semibold text-xl sm:text-2xl">Phone:</span>
                </FadeInSection>
                <FadeInSection delay={250}>
                    <a href="tel:+13235550192" className="text-primary hover:underline font-freight-sans-pro">(323) 555-0192</a>
                </FadeInSection>
            </li>
            <li>
                <FadeInSection delay={300}>
                    <span className="block font-semibold text-xl sm:text-2xl">Email:</span>
                </FadeInSection>
                <FadeInSection delay={350}>
                    <a href="mailto:serena@blakepsychology.com" className="text-primary hover:underline font-freight-sans-pro">serena@blakepsychology.com</a>
                </FadeInSection>
            </li>
            <li>
                <FadeInSection delay={400}>
                    <span className="block font-semibold text-xl sm:text-2xl">Office Hours:</span>
                </FadeInSection>
                <FadeInSection delay={450}>
                    <span className="font-freight-sans-pro">
                        In-person: Tue &amp; Thu, 10 AM–6 PM<br />
                        Virtual (Zoom): Mon, Wed &amp; Fri, 1 PM–5 PM
                    </span>
                </FadeInSection>
            </li>
            <li>
                <FadeInSection delay={500}>
                    <span className="block font-semibold text-xl sm:text-2xl">Experience:</span>
                </FadeInSection>
                <FadeInSection delay={550}>
                    <span className="font-freight-sans-pro">8 years of practice, 500+ sessions</span>
                </FadeInSection>
            </li>
        </ul >
    );
};

export default ContactDetails;