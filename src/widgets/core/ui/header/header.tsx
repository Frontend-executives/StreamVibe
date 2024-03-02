import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Logo } from '@/features/core/ui/logo'
import { Navbar } from '@/features/core/ui/navbar'

const header = cx(
  //* Блочная модель
  'desktop:py-[22px] desktop:px-[162px]',
  'tablet:py-[18px] tablet:px-[80px]',
  'mobile:pt-[46px] mobile:pb-[20px] mobile:px-[16px]',
  'flex items-start justify-between gap-4',
  //* Оформление
  'backdrop-blur-lg',
)

export const Header = (): ReactElement => {
  return (
    <header className={header}>
      <Logo />
      <Navbar />
    </header>
  )
}
