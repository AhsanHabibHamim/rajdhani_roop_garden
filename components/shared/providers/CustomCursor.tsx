'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true)
    }

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1

      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.left = cursorX + 'px'
        cursorOuterRef.current.style.top = cursorY + 'px'
      }

      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.left = mouseX + 'px'
        cursorInnerRef.current.style.top = mouseY + 'px'
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    requestAnimationFrame(animate)

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-expand')
      ) {
        if (cursorOuterRef.current) {
          cursorOuterRef.current.classList.add('cursor-expand-active')
        }
      }
    }

    const handleMouseLeave = () => {
      if (cursorOuterRef.current) {
        cursorOuterRef.current.classList.remove('cursor-expand-active')
      }
    }

    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style>{`
        .cursor-outer {
          position: fixed;
          width: 32px;
          height: 32px;
          border: 2px solid var(--color-gold, #C9A84C);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }
        .cursor-outer.cursor-expand-active {
          width: 56px;
          height: 56px;
          border-color: var(--color-gold, #C9A84C);
          box-shadow: 0 0 20px rgba(201, 168, 76, 0.5);
        }
        .cursor-inner {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: var(--color-gold, #C9A84C);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
        }
      `}</style>
      <div ref={cursorOuterRef} className="cursor-outer" />
      <div ref={cursorInnerRef} className="cursor-inner" />
    </>
  )
}
