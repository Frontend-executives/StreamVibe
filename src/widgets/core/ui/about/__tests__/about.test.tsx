import { render } from '@testing-library/react'

import { About } from '@/widgets/core/ui/about'

describe('About', () => {
  it('should renders logo', () => {
    const { getByRole } = render(<About />)

    const logo = getByRole('img', {
      name: 'transparent logo',
    })

    expect(logo).toBeInTheDocument()
  })

  it('should renders title', () => {
    const { getByText } = render(<About />)

    const title = getByText('The Best Streaming Experience')

    expect(title).toBeInTheDocument()
  })

  it('should renders text', () => {
    const { getByText } = render(<About />)

    const text = getByText(
      // eslint-disable-next-line max-len
      'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.',
    )

    expect(text).toBeInTheDocument()
  })

  it('should renders button', () => {
    const { getByRole } = render(<About />)

    const button = getByRole('button', {
      name: 'Start Watching Now',
    })

    expect(button).toBeInTheDocument()
  })

  test.todo('Добавить тест обработчика клика по кнопке')
})
