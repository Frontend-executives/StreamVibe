import { ReactElement } from 'react'

import { Header } from '@/widgets/core/ui/header'

import { About } from '@/entities/core/ui/about'

export const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
    </>
  )
}
