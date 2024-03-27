import { fireEvent, render } from '@testing-library/react'

import { Button } from '@/shared/core/ui/button'

describe('Button', () => {
  it('should render text', () => {
    const { getByRole } = render(<Button onClick={() => {}} text='button text' type='primary' />)

    const button = getByRole('button', {
      name: 'button text',
    })

    expect(button.textContent).toBe('button text')
  })

  it('should render icon', () => {
    const { getByTestId } = render(<Button icon={<span data-testid='icon' />} onClick={() => {}} type='primary' />)

    const icon = getByTestId('icon')

    expect(icon).toBeInTheDocument()
  })

  it('should render disabled button', () => {
    const { getByRole } = render(<Button isDisabled onClick={() => {}} text='button text' type='primary' />)

    const button = getByRole('button', {
      name: 'button text',
    })

    expect(button).toBeDisabled()
  })

  it('should call onClick function', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Button onClick={onClick} text='button text' type='primary' />)

    const button = getByRole('button', {
      name: 'button text',
    })

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
