import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Logo } from '@/features/core/ui/logo'

const header = cx(
  //* Блочная модель
  'desktop:py-[30px] desktop:px-[162px]',
  'tablet:py-[24px] tablet:px-[80px]',
  'mobile:pt-[46px] mobile:pb-[20px] mobile:px-[16px]',
  //* Оформление
  'backdrop-blur-lg',
)

export const Header = (): ReactElement => {
  return (
    <header className={header}>
      <Logo />
    </header>
  )
}
