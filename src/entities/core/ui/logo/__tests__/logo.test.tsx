import { render } from '@testing-library/react'

import { Logo } from '@/entities/core/ui/logo'

describe('Logo', () => {
  it('should renders logo', () => {
    const { getByRole } = render(<Logo />)

    const logo = getByRole('img', { name: 'StreamVibe logo' })

    expect(logo).toBeInTheDocument()
  })

  it('should renders link', () => {
    const { getByRole } = render(<Logo />)

    const link = getByRole('link', { name: 'StreamVibe logo' })

    expect(link).toBeInTheDocument()
  })
})
