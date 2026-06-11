import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { getRoomBySlug, getRoomSlugs } from '@/lib/sanityQueries'

export const dynamicParams = false
export const revalidate = 60

export async function generateStaticParams() {
  const rooms = await getRoomSlugs()
  return rooms.map((room) => ({ slug: room.slug }))
}

export default async function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = await getRoomBySlug(params.slug)
  if (!room) {
    notFound()
  }

  return (
    <>
      <PageHero
        title={room.title}
        subtitle={room.description}
        imageSrc={room.image}
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading label="ROOM DETAILS" title={room.title} />

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(room.gallery ?? []).map((imageSrc, index) => (
                  <div key={index} className="relative h-56 overflow-hidden rounded-lg bg-[#D4CFC4]">
                    <Image
                      src={imageSrc}
                      alt={`${room.title} gallery ${index + 1}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-white p-8" style={{ backgroundColor: '#FDFBF7' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A3C34' }}>
                  About this room
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {room.fullDescription ?? room.description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-8" style={{ backgroundColor: '#FDFBF7' }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A3C34' }}>
                  Room Summary
                </h3>
                <div className="space-y-4 text-charcoal/70">
                  <p>
                    <strong>Price:</strong> ${room.price} / night
                  </p>
                  <p>
                    <strong>Max Guests:</strong> {room.maxGuests}
                  </p>
                  <p>
                    <strong>Bed Type:</strong> {room.bedType}
                  </p>
                  {room.size !== undefined && (
                    <p>
                      <strong>Room Size:</strong> {room.size} sqm
                    </p>
                  )}
                </div>
              </div>

              {room.amenities?.length ? (
                <div className="rounded-xl bg-white p-8" style={{ backgroundColor: '#FDFBF7' }}>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A3C34' }}>
                    Amenities
                  </h3>
                  <ul className="grid gap-3 text-charcoal/70 sm:grid-cols-2">
                    {room.amenities.map((amenity) => (
                      <li key={amenity} className="rounded-lg bg-[#F5F0E8] px-4 py-3">
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
