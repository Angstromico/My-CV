import { useCallback } from 'react'
import { setScroll } from '../store'

export const useScroll = () => {
  const scrollFunc = useCallback((id: string, func: (id: string) => void) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // You can call other functions or dispatch actions here
          func(id)
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    )

    const section = document.getElementById(id)
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const scrollToSections = () => {
    const sections = document.querySelectorAll('section')
    if (sections) {
      sections.forEach((section) => {
        if (section.id) {
          const id = section.id
          scrollFunc(id, setScroll)
        }
      })
    }
  }

  return { scrollFunc, scrollToSections }
}
