interface Props {
  title: string
  institution: string
  year: number | string
  change?: boolean
  hidden?: boolean
}
const EducationContent = ({
  title,
  institution,
  year,
  change,
  hidden,
}: Props) => {
  return (
    <div
      className={`education__content transition-opacity duration-500 ${hidden ? 'hidden' : 'flex'} ${change ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='education__time'>
        <span className='education__rounder'></span>
        <span className='education__line'></span>
      </div>
      <div className='education__data bd-grid'>
        <h3 className='education__title uppercase'>{title}</h3>
        <span className='education__studies'>{institution}</span>
        <span className='education__year'>{year}</span>
      </div>
    </div>
  )
}
export default EducationContent
