import { useState } from 'react'
import BoxIcon from './BoxIcon'

interface HeaderInfo {
  linksInfo: {
    icon: string
    title: string
    link: string
  }[]
}
const Header = ({ linksInfo }: HeaderInfo) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [elementToScroll, setElementToScroll] = useState('')

  const toggleMenu = () => setOpenMenu(!openMenu)
  const removeMenu = () => setOpenMenu(false)
  const scrollToElement = (id: string) => {
    removeMenu()
    setElementToScroll(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='l-header' id='header'>
      <nav className='nav bd-container'>
        <button onClick={() => scrollToElement('home')} className='nav__logo'>
          Danye
          <BoxIcon name='home' />
        </button>
        <div
          className={`nav__menu ${openMenu ? 'show-menu' : ''}`}
          id='nav-menu'
        >
          <ul className='nav__list'>
            <li className='nav__item'>
              {linksInfo.map((link, i) => (
                <button
                  onClick={() => scrollToElement(link.link)}
                  key={i}
                  className={`nav__link ${elementToScroll === link.link ? 'active-link' : ''}`}
                >
                  <BoxIcon name={link.icon} />
                  {link.title}
                </button>
              ))}
            </li>
          </ul>
        </div>
        <div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
          <BoxIcon name='grid-alt' />
        </div>
      </nav>
    </header>
  )
}
export default Header
