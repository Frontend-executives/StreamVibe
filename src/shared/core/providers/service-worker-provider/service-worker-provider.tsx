'use client'

import { ReactElement, ReactNode, useEffect } from 'react'

interface ServiceWorkerProviderProps {
  children: ReactNode | ReactNode[]
}

export const ServiceWorkerProvider = ({ children }: ServiceWorkerProviderProps): ReactElement => {
  useEffect(() => {
    const initServiceWorker = async (): Promise<void> => {
      if (navigator.serviceWorker) {
        try {
          const reg = await navigator.serviceWorker.register('/sw.js')
          console.log('Service worker register succeed', reg)
        } catch {
          console.log('Service worker register failed')
        }
      }
    }

    initServiceWorker()
  }, [])

  return <>{children}</>
}
