import { ReactElement } from 'react'

import { About } from '@/widgets/core/ui/about'
import { Header } from '@/widgets/core/ui/header'

import { Container } from '@/shared/core/ui/container'

export const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Container element={'main'}>
        <About />
      </Container>
    </>
  )
}
