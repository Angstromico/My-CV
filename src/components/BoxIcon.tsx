interface Props {
  name: string
  classAlt?: string
  l?: 'l'
}
const BoxIcon = ({ name, classAlt = 'nav__icon', l }: Props) => {
  return <i className={`bx bx${l ?? ''}-${name} ${classAlt}`}></i>
}

export default BoxIcon
