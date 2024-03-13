'use client'

import { cva, cx } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography/typography'

const navClassName = cx(
  //* Блочная модель
  'border-[4px] mobile:hidden',
  //* Оформление
  'rounded-r10 border-ui-black-12 bg-ui-black-6',
)
const listClassName = cx(
  //* Блочная модель
  'flex flex-wrap gap-[8px] p-[8px]',
)
const linkClassName = cva(
  [
    //* Блочная модель
    'block rounded-lg',
    'desktop:px-[24px] desktop:py-[14px]',
    'tablet:px-[20px] tablet:py-[12px]',
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
