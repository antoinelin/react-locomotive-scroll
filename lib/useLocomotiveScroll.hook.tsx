import { useContext, useEffect } from 'react'
import { LocomotiveScrollContext, LocomotiveScrollContextValue } from './LocomotiveScroll.context'

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  const context = useContext(LocomotiveScrollContext)

  useEffect(() => {
    if (!context.scroll) {
      console.warn(
        'react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider.'
      )
    }
  }, [context.scroll])

  return context
}

useLocomotiveScroll.displayName = 'useLocomotiveScroll'
