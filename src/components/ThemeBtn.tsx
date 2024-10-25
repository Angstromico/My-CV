import { useState } from 'react'
import BoxIcon from './BoxIcon'

const ThemeBtn = () => {
  const [dark, setDark] = useState(false)

  const darkModeHandler = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  return (
    <button onClick={darkModeHandler}>
      <BoxIcon name={dark ? 'sun' : 'moon'} classAlt='change-theme' />
    </button>
  )
}
export default ThemeBtn
