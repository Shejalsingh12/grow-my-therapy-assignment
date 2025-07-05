import FadeInSection from "../FadeInSection/FadeInSection"

const Philosophy = () => {
    return (
        <section id="philosophy" className="min-h-[400px] md:min-h-fit px-[6vw] md:px-[18vw] pt-5 sm:pt-8 lg:pt-10 xl:pt-12 pb-6 flex flex-col items-center text-dark text-center 2k:container 2k:mx-auto">
            <FadeInSection>
                <h2 className="font-freight-display-pro-light text-[clamp(1.875rem,3.7vw,3rem)] mb-4 leading-tight">
                   Empowering businesses through innovative and reliable solutions.
                </h2>
            </FadeInSection >
            <FadeInSection delay={300}>
                <p className="font-freight-sans-pro-light mt-4 text-md sm:text-lg leading-loose md:leading-8">
                    You might come to therapy for anxiety and stress, relationship challenges, trauma, grief, self-esteem challenges, or parenting concerns. Whatever brings you here, you don’t have to face it alone—therapy offers a compassionate space to build resilience and lasting well-being.
                </p>
            </FadeInSection >
        </section>
    )
}

export default Philosophy