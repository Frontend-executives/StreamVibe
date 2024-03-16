'use client'

import { cva, cx } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography/typography'

const navClassName = cx(
  //* Блочная модель
  'border-4 mobile:hidden',
  //* Оформление
  'desktop:rounded-xl before-desktop:rounded-10px border-ui-black-12 bg-ui-black-6',
)
const listClassName = cx(
  //* Блочная модель
  'flex flex-wrap gap-2 p-2',
)
const linkClassName = cva(
  [
    //* Блочная модель
    'block rounded-lg',
    'desktop:px-6 desktop:py-3.5',
    'tablet:px-5 tablet:py-3',
    //* Анимация
    'hover:bg-ui-black-10 transition-colors',
  ],
  {
    variants: {
      isActive: { true: 'bg-ui-black-12', false: 'text-ui-grey-75' },
    },
    defaultVariants: {
      isActive: false,
    },
  },
)

export const Navbar = (): ReactElement => {
  const pathname = usePathname()

  return (
    <nav className={navClassName}>
      <ul className={listClassName}>
        {/*TODO: Промапить ссылки*/}
        <li>
          <Link className={linkClassName({ isActive: pathname === '/' })} href={'/'}>
            <Typography element={'span'} text={'Home'} type={'TextRegular'} />
          </Link>
        </li>
        <li>
          <Link className={linkClassName({ isActive: pathname === '/movies-and-shows' })} href={'/movies-and-shows'}>
            <Typography element={'span'} text={'Movies & Shows'} type={'TextRegular'} />
          </Link>
        </li>
        <li>
          <Link className={linkClassName({ isActive: pathname === '/support' })} href={'/support'}>
            <Typography element={'span'} text={'Support'} type={'TextRegular'} />
          </Link>
        </li>
        <li>
          <Link className={linkClassName({ isActive: pathname === '/subscriptions' })} href={'/subscriptions'}>
            <Typography element={'span'} text={'Subscriptions'} type={'TextRegular'} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
