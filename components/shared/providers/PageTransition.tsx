'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import gsap from 'gsap'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Page transition animation
    const transitionElement = document.querySelector('.page-transition')
    if (!transitionElement) return

    const tl = gsap.timeline()

    // Show curtain
    tl.to(transitionElement, {
      scaleY: 1,
      duration: 0.6,
      ease: 'power2.inOut',
    })
    // Hide curtain
    .to(
      transitionElement,
      {
        scaleY: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      },
      0.3
    )
  }, [pathname])

  return (
    <>
      <style>{`
        .page-transition {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #1A3C34 0%, #0F2A24 100%);
          transform-origin: top;
          transform: scaleY(0);
          z-index: 1001;
          pointer-events: none;
        }
      `}</style>
      <div className="page-transition" />
      {children}
    </>
  )
}
