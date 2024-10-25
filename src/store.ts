import { atom } from 'nanostores'
export const scrollTo = atom('')

export const setScroll = (id: string) => {
  scrollTo.set(id)
}
