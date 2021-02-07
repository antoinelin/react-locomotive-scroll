import { useContext } from 'react'
import { LocomotiveScrollContext, LocomotiveScrollContextValue } from './LocomotiveScroll.context'

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  return useContext(LocomotiveScrollContext)
}

useLocomotiveScroll.displayName = 'useLocomotiveScroll'
