import { render } from '@testing-library/react'

import { Typography } from '@/shared/core/ui/typography'

describe('Typography', () => {
  it('should renders correct element', () => {
    const { getByText } = render(<Typography element={'h1'} text={'Typography'} type={'HeadingBold'} />)

    const typography = getByText('Typography')

    expect(typography.tagName).toBe('H1')
  })

  it('should renders text', () => {
    const { getByText } = render(<Typography text={'Typography'} type={'HeadingBold'} />)

    const typography = getByText('Typography')

    expect(typography).toBeInTheDocument()
  })

  it('should renders passing class name', () => {
    const { getByText } = render(<Typography className={'text-red-500'} text={'Typography'} type={'HeadingBold'} />)

    const typography = getByText('Typography')

    expect(typography.classList.contains('text-red-500')).toBe(true)
  })
})
