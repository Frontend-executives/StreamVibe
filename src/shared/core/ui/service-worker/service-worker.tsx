'use client'

import { useEffect } from 'react'

const generateConsoleLogStyles = (color: '#ff0100' | '#64d448'): string => {
  return `
    background-color: black;
    color: ${color};
    padding: 4px 8px;
    border-radius: 4px;
  `
}

const registerServiceWorker = async (): Promise<void> => {
  if (navigator.serviceWorker) {
    try {
      const scope = await navigator.serviceWorker.register('/service-worker.js')

      console.log('%cService Worker registered with scope:', generateConsoleLogStyles('#64d448'), scope)
    } catch (error) {
      console.log('%cService Worker registration failed:', generateConsoleLogStyles('#ff0100'), error)
    }
  }
}

export const ServiceWorker = (): null => {
  useEffect(() => {
    registerServiceWorker()
  }, [])

  return null
}
