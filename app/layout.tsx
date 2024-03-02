import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StreamVibe',
  description: 'Онлайн кинотеатр',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement {
  return (
    <html lang='ru'>
      <body className={cx(inter.className, 'bg-size bg-black')}>{children}</body>
    </html>
  )
}