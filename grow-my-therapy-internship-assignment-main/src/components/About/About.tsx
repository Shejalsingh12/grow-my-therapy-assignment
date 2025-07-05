import Image from "next/image";
import serena from "@/../public/serenablake-cropped.jpg"
import { useEffect, useRef, useState } from "react";
import FadeInSection from "../FadeInSection/FadeInSection";

const About = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const [textHeight, setTextHeight] = useState<number>(0);

    // After mount (and whenever text changes), record its height
    useEffect(() => {
        if (textRef.current) {
            setTextHeight(textRef.current.offsetHeight);
        }
    }, []);

    return (
        <section id="about" className="bg-light h-full w-full 
        pt-14 md:pt-24 lg:pt-32 xl:pt-[170px] 2xl:pt-44
        pb-36 xs:pb-[43vw] md:pb-[12vw] lg:pb-[9vw] xl:pb-[5vw]
        px-[6vw] md:px-[4vw]
        font-freight-display-pro">
            <FadeInSection className="w-full">
                <div className="
                w-full 
                text-muted 
                grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_1fr] 

                gap-y-4 md:gap-y-0
                md:pl-[11.5vw] md:pr-[8.5vw]
                md:gap-x-[8vw] lg:gap-x-28 xl:gap-x-36 
                2xl:max-2k:max-w-[1400px] 2xl:mx-auto
                2k:container 2k:max-w-[1500px]
                "
                >
                    <FadeInSection>
                        <h2 className="font-freight-display-pro-bold 
                text-[25px] sm:text-[28px] md:text-[28px] mdlg:text-[29px] lg:text-[30px] xl:text-[36px]
                mb-4 md:mb-2 xl:mb-6 pr-16">
                            About Dr. Serena Blake
                        </h2>
                    </FadeInSection>
                    <div className="w-full h-auto md:h-fit md:row-span-2 mb-6 md:mb-0 md:py-11 lg:py-8 xl:py-0">
                        <FadeInSection className="w-full">
                            <Image
                                style={{
                                    // only apply the cap on md+ screens
                                    maxHeight: textHeight,
                                    overflow: "hidden",
                                }}
                                src={serena}
                                alt={"Serena Blake"}
                                className="w-full max-h-80 md:h-fit object-contain"
                            />
                        </FadeInSection>
                    </div>

                    <div ref={textRef} className="flex flex-col gap-4 leading-relaxed md:leading-loose text-lg font-freight-sans-pro-light md:font-freight-sans-pro-light min-h-screen md:min-h-fit items-start ">
                        <FadeInSection>
                            <p className="">
                                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California, with over eight years of hands-on experience in the mental health field. She has conducted more than 500 therapy sessions, working closely with individuals from diverse backgrounds and life experiences. Her approach is warm, respectful, and deeply rooted in both clinical expertise and human connection.</p>
                        </FadeInSection>
                        <FadeInSection delay={200}>
                            <p className="">
                               Dr. Blake specializes in helping clients navigate anxiety, relationship challenges, and trauma recovery. By blending cognitive-behavioral therapy (CBT), mindfulness techniques, and trauma-informed care, she tailors each session to meet her clients’ unique goals. Her practice is grounded in evidence-based methods, but always delivered with empathy and compassion.</p>
                        </FadeInSection>
                        <FadeInSection delay={400}>
                            <p className="">
                                Sessions with Dr. Blake are designed to be both practical and empowering. She creates a space where clients feel genuinely heard, supported, and challenged in the right ways. Whether you're dealing with overwhelming stress, struggling with emotional wounds from the past, or simply seeking more balance, she offers tools to foster growth and resilience.

                                Clients can meet with Dr. Blake in person at her serene Maplewood Drive office or connect virtually through secure Zoom sessions. No matter the format, she is committed to building a therapeutic relationship based on trust, safety, and meaningful progress. Her goal is to help you not only cope—but truly thrive.</p>
                        </FadeInSection>
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}

export default About;