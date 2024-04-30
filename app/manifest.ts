import { MetadataRoute } from 'next'

import { PROJECT_DESCRIPTION, PROJECT_TITLE } from '@/shared/core/utils/constants'

const manifest = (): MetadataRoute.Manifest => ({
  background_color: '#141414',
  categories: ['entertainment '],
  description: PROJECT_DESCRIPTION,
  display: 'fullscreen',
  name: PROJECT_TITLE,
  theme_color: '#141414',
  short_name: PROJECT_TITLE,
  icons: [
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
})

export default manifest
