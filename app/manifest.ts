import { MetadataRoute } from 'next'

import { PROJECT_DESCRIPTION, PROJECT_TITLE } from '@/shared/core/utils/constants'

const manifest = (): MetadataRoute.Manifest => ({
  background_color: '#141414',
  categories: ['entertainment '],
  description: PROJECT_DESCRIPTION,
  display: 'standalone',
  name: PROJECT_TITLE,
  theme_color: '#141414',
  scope: '/',
  start_url: '/',
  short_name: PROJECT_TITLE,
  screenshots: [
    {
      src: '/PWA/desktop_screenshot.png',
      sizes: '3840x2160',
      type: 'image/png',
      // @ts-ignore
      form_factor: 'wide',
    },
    {
      src: '/PWA/mobile_screenshot.png',
      sizes: '1290x2796',
      type: 'image/png',
      // @ts-ignore
      form_factor: 'narrow',
    },
  ],
  icons: [
    {
      src: '/PWA/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/PWA/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/PWA/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/PWA/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
})

export default manifest
