import { useState, useEffect } from 'react'
import BoxIcon from './BoxIcon'
const ScrollTop = () => {
  const [scroll, setScroll] = useState(false)
  const scrolltoTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button onClick={scrolltoTop} className='scrolltop'>
      <BoxIcon
        name='up-arrow-alt'
        classAlt={`scrolltop__icon ${scroll ? 'show-scroll' : ''}`}
      />
    </button>
  )
}
export default ScrollTop
