import { useState, useEffect } from 'react'

/**
 * useScrollSpy
 * Tracks which section ID is currently in view based on scroll position.
 * Returns the active section ID string.
 */
export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset + 10

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection(sectionIds[0] ?? '')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
