import { render } from '@testing-library/react'

import { Container } from '@/shared/core/ui/container'

describe('Container', () => {
  it('should render content', () => {
    const { getByText } = render(
      <Container>
        <p>Test text</p>
      </Container>,
    )

    const content = getByText('Test text')

    expect(content).toBeInTheDocument()
  })

  it('should render correct element', () => {
    const { getByText } = render(<Container element={'section'}>Container</Container>)

    const container = getByText('Container')

    expect(container.tagName).toBe('SECTION')
  })
})
