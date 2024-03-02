import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { ReactElement } from 'react'

const className = cx(
  //* Типографика
  'text-4xl font-extrabold',
  //* Оформление
  'bg-gradient-to-r from-purple-300 to-pink-600 inline-block text-transparent bg-clip-text',
  //* Анимация
  'select-none hover:opacity-80 transition-opacity',
)

export const Logo = (): ReactElement => {
  return (
    <Link className={className} href={'/'}>
      Flickle
    </Link>
  )
}
