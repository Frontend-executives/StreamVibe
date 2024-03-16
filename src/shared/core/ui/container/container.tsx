import { cx } from 'class-variance-authority'
import { createElement, ReactElement, ReactNode } from 'react'

const containerClassName = cx(
  //* Блочная модель
  'desktop:px-162px tablet:px-20 mobile:px-4',
)

type ContainerProps = {
  children: ReactNode | ReactNode[]
  className?: string
  element?: string
}

export const Container = ({ children, className, element = 'div' }: ContainerProps): ReactElement => {
  return createElement(
    element,
    {
      className: cx(containerClassName, className),
    },
    children,
  )
}
