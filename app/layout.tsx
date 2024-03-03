import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import '@/app/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StreamVibe',
  description: 'Онлайн кинотеатр',
}

const body = cx(inter.className, 'bg-ui-black-8 text-white')

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang='ru'>
      <body className={body}>{children}</body>
    </html>
  )
}

export default RootLayout
