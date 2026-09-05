import { useState, useEffect } from 'react'

/**
 * useNavbar
 * Returns whether the page has been scrolled past a threshold.
 * Used to compact the navbar on scroll.
 */
export function useNavbar(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
