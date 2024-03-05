import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography'

const title = 'Explore our wide variety of categories'
const subtitle =
  // eslint-disable-next-line max-len, quotes
  "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"

const section = cx(
  //* Блочная модель
  'pt-[200px]',
)

const titleClassName = cx(
  //* Типографика
  'font-weight-600',
)

export const Genres = (): ReactElement => {
  return (
    <section className={section}>
      <Typography className={titleClassName} element='h2' text={title} type={'TitleBold'} />
      <Typography element='p' text={subtitle} type={'TextRegular'} />
    </section>
  )
}
