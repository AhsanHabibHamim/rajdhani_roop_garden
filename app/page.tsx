import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { RoomsSection } from '@/components/home/RoomsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
