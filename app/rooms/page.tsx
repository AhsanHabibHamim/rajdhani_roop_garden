import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { RoomCard } from '@/components/shared/RoomCard'
import { ROOMS } from '@/lib/constants'

export const metadata = {
  title: 'Rooms & Suites | Rajdhani Roop Garden Resort',
  description: 'Explore our luxurious rooms and suites with stunning amenities and views.',
}

export default function RoomsPage() {
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
            {ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
