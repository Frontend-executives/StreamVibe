import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Logo } from '@/entities/core/ui/logo'
import { Navbar } from '@/entities/core/ui/navbar'

import { Container } from '@/shared/core/ui/container'

const containerClassName = cx(
  //* Блочная модель
  'desktop:py-[22px] tablet:py-[18px] mobile:pt-[46px] mobile:pb-[20px]',
  'flex items-center justify-between gap-4',
  //* Позиционирование
  'fixed top-0 left-0 right-0',
  //* Оформление
  'backdrop-blur-lg',
)

export const Header = (): ReactElement => {
  return (
    <Container className={containerClassName} element='header'>
      <Logo />
      <Navbar />
    </Container>
  )
}
