import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { OFFERS } from '@/lib/constants'

export const metadata = {
  title: 'Special Offers | Rajdhani Roop Garden Resort',
  description: 'Browse our exclusive packages and special offers.',
}

export default function OffersPage() {
  return (
    <>
      <PageHero
        title="Special Offers"
        subtitle="Exclusive Packages & Deals"
        imageSrc="/images/hero-garden.png"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="PROMOTIONS"
            title="Limited Time Offers"
            subtitle="Take advantage of our exclusive packages and special rates."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFERS.map((offer, index) => {
              const isFeatured = !!offer.featured
              const priceLabel = `$${offer.discountedPrice.toFixed(0)}`

              return (
                <div
                  key={index}
                  className={`p-8 rounded-lg relative overflow-hidden ${
                    isFeatured ? 'md:col-span-2 lg:col-span-1 ring-2' : ''
                  }`}
                  style={{
                    backgroundColor: isFeatured ? '#1A3C34' : '#FDFBF7',
                    borderColor: isFeatured ? '#C9A84C' : 'transparent',
                  }}
                >
                  {isFeatured && (
                    <div
                      className="absolute top-0 right-0 px-4 py-2 text-xs font-bold"
                      style={{ backgroundColor: '#C9A84C', color: '#1A3C34' }}
                    >
                      FEATURED
                    </div>
                  )}

                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: isFeatured ? '#E8D4A8' : '#1A3C34' }}
                  >
                    {offer.title}
                  </h3>

                  <p
                    className="mb-6"
                    style={{ color: isFeatured ? '#D4CFC4' : '#4A4A47' }}
                  >
                    {offer.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    {offer.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span style={{ color: '#C9A84C' }}>✓</span>
                        <p style={{ color: isFeatured ? '#D4CFC4' : '#4A4A47' }}>
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p
                      className="text-3xl font-bold"
                      style={{ color: isFeatured ? '#E8D4A8' : '#C9A84C' }}
                    >
                      {priceLabel}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: isFeatured ? '#D4CFC4' : '#4A4A47' }}
                    >
                      {offer.validUntil}
                    </p>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      isFeatured ? 'bg-gold text-charcoal' : ''
                    }`}
                    style={{
                      backgroundColor: isFeatured ? '#C9A84C' : '#1A3C34',
                      color: isFeatured ? '#1A3C34' : '#E8D4A8',
                    }}
                  >
                    Book Now
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full section-padding" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="section-container max-w-3xl">
          <SectionHeading
            label="QUESTIONS"
            title="Frequently Asked Questions"
          />

          <div className="mt-12 space-y-6">
            {[
              {
                q: 'Are these offers valid for all dates?',
                a: 'Most offers are available year-round, but some may have blackout dates. Please check the terms and conditions.',
              },
              {
                q: 'Can I combine multiple offers?',
                a: 'Offers cannot be combined with other promotions, but our team can help find the best deal for your stay.',
              },
              {
                q: 'What is your cancellation policy?',
                a: 'Most bookings allow free cancellation up to 7 days before arrival. Terms vary by offer.',
              },
              {
                q: 'How do I make a reservation?',
                a: 'You can book directly on our website, call us, or email our reservations team.',
              },
            ].map((faq, index) => (
              <div key={index} className="border-b pb-6" style={{ borderColor: '#D4CFC4' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1A3C34' }}>
                  {faq.q}
                </h4>
                <p style={{ color: '#4A4A47' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
