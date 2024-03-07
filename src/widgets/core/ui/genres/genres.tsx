import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { GenreCard } from '@/entities/core/ui/genreCard'

import { Typography } from '@/shared/core/ui/typography'

const title = 'Explore our wide variety of categories'
const subtitle =
  // eslint-disable-next-line max-len, quotes
  "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"

const section = cx(
  //* Блочная модель
  'pt-[200px]',
)

const titleContainer = cx(
  //* Блочная модель
  'flex justify-between items-end gap-[100px]',
)

const textContainer = cx(
  //* Блочная модель
  'max-w-[82%]',
)

const titleClassName = cx(
  //* Блочная модель
  'mb-[14px]',

  //* Типографика
  'font-weight-600',
)

const subtitleClassName = cx(
  //* Типографика
  'text-ui-grey-60',
)

export const Genres = (): ReactElement => {
  return (
    <section className={section}>
      <div className={titleContainer}>
        <div className={textContainer}>
          <Typography className={titleClassName} element='h2' text={title} type={'TitleBold'} />
          <Typography className={subtitleClassName} element='p' text={subtitle} type={'TextRegular'} />
        </div>
        {/* компонент переключателя */}
        <div className='h-[88px] w-[257px] bg-white'></div>
      </div>

      <GenreCard />
    </section>
  )
}
