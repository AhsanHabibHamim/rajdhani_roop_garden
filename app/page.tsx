import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { PortfolioSection } from '@/components/home/PortfolioSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
