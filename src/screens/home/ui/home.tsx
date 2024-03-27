import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { About } from '@/widgets/core/ui/about'
import { Faq } from '@/widgets/core/ui/faq'
import { Header } from '@/widgets/core/ui/header'
import { PlatformsOverview } from '@/widgets/core/ui/platforms-overview'

import { Container } from '@/shared/core/ui/container'

const containerClassName = cx(
  //* Блочная модель
  'flex flex-col',
  'desktop:gap-150px tablet:gap-120px mobile:gap-20',
)

export const Home = async (): Promise<ReactElement> => {
  return (
    <>
      <Header />
      <Container className={containerClassName} element='main'>
        <About />
        <PlatformsOverview />
        <Faq />
      </Container>
    </>
  )
}
