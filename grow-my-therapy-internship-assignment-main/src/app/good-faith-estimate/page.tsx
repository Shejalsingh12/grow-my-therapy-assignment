// app/good-faith-estimate/page.tsx
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import FadeInSection from '@/components/FadeInSection/FadeInSection'

export const metadata = {
    title: 'Good Faith Estimate – Your Site',
}

export default function GoodFaithEstimatePage() {
    return (
        <>
            <Header />

            <main className="container mx-auto max-w-xl px-4 py-16 prose prose-lg font-freight-sans-pro space-y-4">
                <FadeInSection>
                    <h1 className="text-center text-lg xs:text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-2 xs:mb-4 sm:mb-6 md:mb-8 xl:mb-10 2xl:mb-12 font-freight-display-pro">Good Faith Estimate</h1>
                </FadeInSection>
                <FadeInSection delay={150}>
                    <p className="text-center max-sm:text-sm md:text-lg leading-relaxed md:leading-loose">
                        Effective January 1, 2022, a ruling went into effect called the “No
                        Surprises Act,” which requires mental health practitioners to provide
                        a “Good Faith Estimate” (GFE) about{' '}
                        <span className="underline">
                            out-of-network care to any patient who is uninsured or who is
                            insured but does not plan to use their insurance benefits to pay
                            for health care items and/or services
                        </span>
                        .
                    </p>
                </FadeInSection >

                <FadeInSection delay={300}>
                    <p className="text-center max-sm:text-sm md:text-lg leading-relaxed md:leading-loose">
                        The Good Faith Estimate shows the cost of items and services that are
                        reasonably expected for your mental health care needs. The estimate is
                        based on information known at the time it was created and does not
                        include any unknown or unexpected costs that may arise during
                        treatment.
                    </p>
                </FadeInSection >

                <FadeInSection delay={450}>
                    <p className="text-center max-sm:text-sm md:text-lg leading-relaxed md:leading-loose">
                        You are entitled to receive this “Good Faith Estimate” of what the
                        charges could be for psychotherapy services provided to you. While it
                        is not possible to know in advance how many sessions you may need,
                        an estimate of the cost will be provided. Your total cost depends on
                        the number of sessions you attend, your individual circumstances,
                        and the type and amount of services provided. This estimate is not a
                        contract and does not obligate you to obtain any services.
                    </p>
                </FadeInSection >
            </main>

            <Footer />
        </>
    )
}
