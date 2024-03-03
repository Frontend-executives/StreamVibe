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
})
