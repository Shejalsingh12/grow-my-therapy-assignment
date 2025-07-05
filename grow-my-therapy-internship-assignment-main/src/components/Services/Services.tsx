import anxiousPic from "@/../public/anxious.jpg"
import relationship from "@/../public/relationship.jpg"
import trauma from "@/../public/trauma.jpg"
import ServiceCard from "../ServiceCard/ServiceCard";
import FadeInSection from "../FadeInSection/FadeInSection";

const Services = () => {
    return (
        <section id="services" className="
            py-6 lg:py-7 xl:py-10 2xl:py-12 flex flex-col items-center text-center text-dark w-full px-4 xsm:px-[4vw] "
        >
            <FadeInSection>
                <p className="font-freight-display-pro-light text-[clamp(1.875rem,3.7vw,3rem)] mdlg:text-[clamp(1.875rem,4vw,2.8rem)] mb-[76px] xs:mb-20 xsm:mb-[72px] md:mb-[76px] mt-0.5">
                    Areas of Focus
                </p>
            </FadeInSection >
            <FadeInSection className="w-full">
                <ul
                    className="flex flex-col gap-16 xs:gap-[74px]
                xsm:grid xsm:grid-cols-2 xsm:grid-rows-2 xsm:gap-14 xsm:-mb-8
                md:flex md:flex-row md:flex-wrap md:gap-16 md:mb-0 md:justify-between
                items-start justify-center w-full text-center "
                >
                    <li className="flex items-center">
                        <FadeInSection>
                            {/* Original source: https://www.freepik.com/free-photo/medium-shot-anxious-man-indoors_32407652.htm */}
                            <ServiceCard
                                imgSrc={anxiousPic}
                                imgAlt=""
                                headingText=" Therapy for Professionals Facing Career Transitions"
                                paraText="Major career shifts—whether by choice or circumstance—can stir up uncertainty, self-doubt, and anxiety. Whether you’re changing industries, navigating layoffs, returning to work after a break, or reevaluating your goals mid-career, therapy can offer clarity and direction. Together, we can explore your identity beyond your job title, rebuild confidence, and create a roadmap for your next chapter."
                            />
                        </FadeInSection>
                    </li>
                    <li className="flex items-center">
                        <FadeInSection delay={200}>
                            {/* Original source: https://www.freepik.com/free-photo/young-couple-psychologist-looking-each-other-with-hate_3938477.htm */}
                            <ServiceCard
                                imgSrc={relationship}
                                imgAlt=""
                                headingText="therapy for LGBTQ+ Individuals"
                                paraText="Living as part of the LGBTQ+ community can come with unique emotional stressors related to identity, acceptance, and safety. Whether you're coming out, navigating family or societal rejection, or seeking a space to explore gender or sexuality, therapy offers a nonjudgmental, affirming space. We’ll work together to support your emotional well-being and strengthen your sense of self and belonging."
                            />
                        </FadeInSection>
                    </li>
                    <li className="flex items-center">
                        <FadeInSection delay={400}>
                            {/* Original source: https://www.freepik.com/free-photo/stressed-teenager-sitting-sofa_19085993.htm */}
                            <ServiceCard
                                imgSrc={trauma}
                                imgAlt=""
                                headingText="Therapy for Adults Navigating Family Estrangement"
                                paraText="Separation from family—emotionally or physically—can be an intensely painful and isolating experience. Whether the distance was chosen or forced by conflict, therapy provides a compassionate space to process grief, guilt, anger, or relief. Our work can focus on helping you understand your needs and boundaries, heal from unresolved wounds, and build healthy connections elsewhere in your life."
                            />
                        </FadeInSection>
                    </li>
                </ul>
            </FadeInSection >
        </section>
    )
}

export default Services;