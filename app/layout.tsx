import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import '@/app/styles/globals.css'

import { ServiceWorkerProvider } from '@/shared/core/providers/service-worker-provider'

const inter = Inter({ subsets: ['latin'] })

const bodyClassName = cx(inter.className, 'bg-ui-black-8 text-white')

export const metadata: Metadata = {
  title: 'StreamVibe',
  description: 'Онлайн кинотеатр',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang='ru'>
      <body className={bodyClassName}>
        <ServiceWorkerProvider>{children}</ServiceWorkerProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
