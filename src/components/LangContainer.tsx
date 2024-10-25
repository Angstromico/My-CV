import { useEffect, useState } from 'react'
import { scrollTo } from '../store'

interface Props {
  languages: {
    en: string
    es: string
  }
}

const LangContainer = ({ languages }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollToElement = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array ensures that the effect runs only once

  return (
    <>
      <ul className={`language-selector ${isScrolled ? 'scroll' : ''}`}>
        {Object.entries(languages).map(([lang, label]) => (
          <li key={lang}>
            {' '}
            <a
              onClick={() =>
                scrollToElement(scrollTo.value ? scrollTo.value : '')
              }
              href={`/${lang === 'en' ? '' : lang + '/'}`}
            >
              {label}
            </a>{' '}
          </li>
        ))}
      </ul>
      <div className={`language-selector-mobile ${isScrolled ? 'scroll' : ''}`}>
        <ul>
          {Object.entries(languages).map(([lang, label]) => (
            <li key={lang}>
              <a
                onClick={() =>
                  scrollToElement(scrollTo.value ? scrollTo.value : '')
                }
                href={`/${lang === 'en' ? '' : lang + '/'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default LangContainer
