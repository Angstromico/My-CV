import { useEffect, useState } from 'react'
import { useScroll } from '../hooks/scrollFunc'
import EducationContent from './EducationContent'

type Data = { title: string; academy: string; year: number | string }[]

interface Props {
  education: string
  educationData: Data
  showEducation: { less: string; more: string }
}

const Education = ({ education, educationData, showEducation }: Props) => {
  const [degrees, setDegrees] = useState(false)
  const [hidden, setHidden] = useState(true)
  const { scrollToSections } = useScroll()

  useEffect(() => {
    scrollToSections()
  }, []) // Empty dependency array to ensure effect runs only once

  const educationD = degrees ? [0, 1, 2, 3, 4, 5] : [0, 1, 2]

  const toggleEducation = () => {
    setHidden(!hidden)
    setTimeout(() => setDegrees(!degrees), 200)
  }

  return (
    <section className='education section' id='education'>
      <h2 className='section-title'>{education}</h2>
      <div className='education__container bd-grid'>
        {educationData.map((eduInfo, i) => {
          const { title, academy, year } = eduInfo

          return (
            <EducationContent
              key={title}
              title={title}
              institution={academy}
              year={year}
              change={educationD.includes(i)}
              hidden={!educationD.includes(i) && hidden}
            />
          )
        })}
      </div>
      <div className='w-full flex justify-center items-center'>
        <button
          onClick={toggleEducation}
          className='home__button-mobile start transition-all duration-500'
        >
          {degrees ? showEducation.less : showEducation.more}
        </button>
      </div>
    </section>
  )
}
export default Education
