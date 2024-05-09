'use client'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

const handleNetworkChange = (): void => {
  if (navigator.onLine) {
    toast.success('Интернет соединение восстановлено. Страница будет перезагружена через 5 сек.', {
      pauseOnHover: false,
    })

    setTimeout(() => window.location.reload(), 5000)
  } else {
    toast.error('Интернет соединение потеряно', {
      pauseOnHover: false,
    })
  }
}

export const NetworkManager = (): null => {
  useEffect(() => {
    window.addEventListener('online', handleNetworkChange)
    window.addEventListener('offline', handleNetworkChange)

    return () => {
      window.removeEventListener('online', handleNetworkChange)
      window.removeEventListener('offline', handleNetworkChange)
    }
  }, [])

  useEffect(() => {
    if (!navigator.onLine) {
      toast.info('Приложение работает в оффлайн-режиме', {
        pauseOnHover: false,
      })
    }
  }, [])

  return null
}
