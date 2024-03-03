import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Logo } from '@/entities/core/ui/logo'
import { Navbar } from '@/entities/core/ui/navbar'

import { Container } from '@/shared/core/ui/container'

const header = cx(
  //* Блочная модель
  'desktop:py-[22px] tablet:py-[18px] mobile:pt-[46px] mobile:pb-[20px]',
  'flex items-start justify-between gap-4',
  //* Оформление
  'backdrop-blur-lg',
)

export const Header = (): ReactElement => {
  return (
    <Container>
      <header className={header}>
        <Logo />
        <Navbar />
      </header>
    </Container>
  )
}
