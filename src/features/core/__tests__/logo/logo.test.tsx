import { render } from '@testing-library/react'

import { Logo } from '@/features/core/ui/logo'

describe('Logo', () => {
  it('should renders logo', () => {
    const { getByRole } = render(<Logo />)

    const link = getByRole('link', { name: 'StreamVibe logo' })
    const logo = getByRole('img', { name: 'StreamVibe logo' })

    expect(link).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })
})
