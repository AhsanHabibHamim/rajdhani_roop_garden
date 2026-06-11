import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { RoomCard } from '@/components/shared/RoomCard'
import { getRooms } from '@/lib/sanityQueries'
import type { Room } from '@/lib/types'

export const metadata = {
  title: 'Rooms & Suites | Rajdhani Roop Garden Resort',
  description: 'Explore our luxurious rooms and suites with stunning amenities and views.',
}

export default async function RoomsPage() {
  let rooms: Room[] = []
  let isError = false

  try {
    rooms = await getRooms()
  } catch (error) {
    console.error('Failed to load rooms from Sanity:', error)
    isError = true
  }

  return (
    <>
      <PageHero
        title="Luxurious Accommodations"
        subtitle="Discover our collection of elegantly designed rooms and suites"
        imageSrc="https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6"
      />

      <section className="w-full section-padding" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="section-container">
          <SectionHeading
            label="ACCOMMODATIONS"
            title="All Room Categories"
            subtitle="Each room is meticulously designed for your comfort and pleasure."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isError ? (
              <div className="col-span-full rounded-xl bg-white p-12 text-center text-charcoal/80">
                Rooms are temporarily unavailable. Please check back soon.
              </div>
            ) : rooms.length ? (
              rooms.map((room) => <RoomCard key={room.id} room={room} />)
            ) : (
              <div className="col-span-full rounded-xl bg-white p-12 text-center text-charcoal/80">
                No rooms found in the CMS yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
