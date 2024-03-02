import { render } from '@testing-library/react'

import { Navbar } from '@/features/core/ui/navbar'

describe('Navbar', () => {
  it('should renders links', () => {
    const linkTexts = ['Home', 'Movies & Shows', 'Support', 'Subscriptions']

    const { getByRole } = render(<Navbar />)

    linkTexts.forEach((text) => {
      const link = getByRole('link', {
        name: text,
      })
      expect(link).toBeInTheDocument()
    })
  })
})
