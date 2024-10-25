import BoxIcon from './BoxIcon'

interface Props {
  interest: string
  herInterests: { name: string; icon: string }[]
}

const Interests = ({ interest, herInterests }: Props) => {
  return (
    <section className='interests section' id='interests'>
      <h2 className='section-title'>{interest}</h2>

      <div className='interests__container bd-grid'>
        {herInterests.map((int) => {
          const { name, icon } = int

          return (
            <div key={icon} className='interests__content'>
              <BoxIcon classAlt='interests__icon' name={icon} />
              <span className='interests__name'>{name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Interests
