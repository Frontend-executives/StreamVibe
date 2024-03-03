import { cx } from 'class-variance-authority'
import { ReactElement, ReactNode } from 'react'

const container = cx('desktop:px-[162px] tablet:px-[80px] mobile:px-[16px]')

type ContainerProps = {
  children: ReactNode | ReactNode[]
}

export const Container = ({ children }: ContainerProps): ReactElement => {
  return <section className={container}>{children}</section>
}
