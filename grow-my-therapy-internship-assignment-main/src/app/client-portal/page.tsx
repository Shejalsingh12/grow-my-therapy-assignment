// app/client-portal/page.tsx
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import FadeInSection from '@/components/FadeInSection/FadeInSection'

export const metadata = {
    title: 'Client Portal – Your Site',
}

export default function ClientPortalPage() {
    return (
        <>
            <Header />

            <main className="container mx-auto px-4 py-16 prose prose-lg font-freight-sans-pro text-center">
                <FadeInSection>
                    <h1 className='text-lg xs:text-xl sm:text-2xl md:text-3xl font-freight-display-pro mb-2 xs:mb-4 sm:mb-6 md:mb-8 xl:mb-10 2xl:mb-12'>Client Portal</h1>
                </FadeInSection >
                <FadeInSection delay={200}>
                    <p className='max-xs:text-sm sm:text-lg md:text-xl'>Unavailable at the moment.</p>
                </FadeInSection>
            </main>

            <Footer />
        </>
    )
}
