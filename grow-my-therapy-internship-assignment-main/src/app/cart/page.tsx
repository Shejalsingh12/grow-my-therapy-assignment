// app/cart/page.tsx
import Link from 'next/link'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import FadeInSection from '@/components/FadeInSection/FadeInSection'

export const metadata = {
    title: 'Shopping Cart – Your Store',
}

export default function CartPage() {
    return (
        <>
            <Header />

            <main
                id="cart"
                className="container mx-auto px-4 py-16 flex flex-col items-center text-center font-freight-sans-pro"
            >
                <FadeInSection>
                    <h2
                        aria-label="Shopping Cart"
                        className="cart-title text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold mb-8 font-freight-display-pro"
                    >
                        Shopping Cart
                    </h2>
                </FadeInSection>

                <FadeInSection delay={150}>
                    <p
                        aria-label="You have nothing in your shopping cart."
                        className="empty-message max-xs:text-sm sm:text-lg text-gray-600 mb-6"
                    >
                        You have nothing in your shopping cart.
                    </p>
                </FadeInSection >
                <FadeInSection delay={300}>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 max-xs:text-sm border border-gray-400 rounded-md hover:bg-gray-100 transition"
                        aria-label="Continue Shopping"
                    >
                        Continue Shopping
                    </Link>
                </FadeInSection >
            </main>

            <Footer />
        </>
    )
}
