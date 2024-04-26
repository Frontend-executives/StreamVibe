import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cx } from 'class-variance-authority'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import '@/app/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const bodyClassName = cx(inter.className, 'bg-ui-black-8 text-white')

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#141414' }],
}

export const metadata: Metadata = {
  title: 'Stream Vibe',
  description: 'Online cinema app',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['online cinema'],
  authors: [{ name: 'Kirill Shashichev' }],
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' },
  ],
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang='ru'>
      <body className={bodyClassName}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
