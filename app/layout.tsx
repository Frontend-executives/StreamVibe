import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import '@/app/styles/globals.css'

import { PROJECT_DESCRIPTION, PROJECT_TITLE } from '@/shared/core/utils/constants'

const inter = Inter({ subsets: ['latin'] })

const bodyClassName = cx(inter.className, 'bg-ui-black-8 text-white')

export const metadata: Metadata = {
  title: PROJECT_TITLE,
  description: PROJECT_DESCRIPTION,
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
