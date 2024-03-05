import { ReactElement } from 'react'

import { About } from '@/widgets/core/ui/about'
import { Genres } from '@/widgets/core/ui/genres'
import { Header } from '@/widgets/core/ui/header'

import { Container } from '@/shared/core/ui/container'

const HomePage = (): ReactElement => {
  return (
    <>
      <Header />
      <Container element={'main'}>
        <About />
        <Genres />
      </Container>
    </>
  )
}

export default HomePage
