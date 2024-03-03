import { render } from '@testing-library/react'
import { ReactElement } from 'react'

import { Header } from '@/widgets/core/ui/header'

jest.mock('@/entities/core/ui/logo', () => {
  return {
    __esModule: true,
    Logo: (): ReactElement => <div data-testid='logo'>Logo</div>,
  }
})

jest.mock('@/entities/core/ui/navbar', () => {
  return {
    __esModule: true,
    Navbar: (): ReactElement => <nav data-testid='navbar'>Navbar</nav>,
  }
})

describe('Header', () => {
  it('should renders Logo and Navbar', () => {
    const { getByTestId } = render(<Header />)

    expect(getByTestId('logo')).toBeInTheDocument()
    expect(getByTestId('navbar')).toBeInTheDocument()
  })
})
