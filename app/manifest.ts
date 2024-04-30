import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  background_color: '#141414',
  categories: ['entertainment '],
  description:
    // eslint-disable-next-line max-len
    'Погрузитесь в мир кино со StreamVibe, вашим надёжным помощником для просмотра фильмов и сериалов. Наслаждайтесь подборкой контента, адаптированной под любой вкус, и открывайте для себя новые шедевры в любом месте. Независимо от того, являетесь ли вы киноманом или просто ищете что-то для просмотра, StreamVibe приносит магию кино прямо в ваши руки.',
  display: 'fullscreen',
  name: 'Stream Vibe',
  theme_color: '#141414',
  short_name: 'StreamVibe',
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
