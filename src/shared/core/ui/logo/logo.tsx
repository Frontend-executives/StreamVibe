import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { ReactElement } from 'react'

const className = cx(
  'text-4xl font-extrabold',
  'bg-gradient-to-r from-purple-300 to-pink-600 inline-block text-transparent bg-clip-text',
  'select-none hover:opacity-80 transition-opacity',
)

export const Logo = (): ReactElement => {
  return (
    <Link className={className} href={'/'}>
      Flickle
    </Link>
  )
}
