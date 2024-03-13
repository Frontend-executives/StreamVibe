import { ReactElement } from 'react'

import { About } from '@/widgets/core/ui/about'
import { Header } from '@/widgets/core/ui/header'
import { PlatformsOverview } from '@/widgets/core/ui/platforms-overview'

import { Container } from '@/shared/core/ui/container'

export const Home = async (): Promise<ReactElement> => {
  return (
    <>
      <Header />
      <Container element={'main'}>
        <About />
        <PlatformsOverview />
      </Container>
    </>
  )
}
