import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { GenreCard } from '@/entities/core/ui/genreCard'
import { Switcher } from '@/entities/core/ui/switcher'

import { Typography } from '@/shared/core/ui/typography'

const title = 'Explore our wide variety of categories'
const subtitle =
  // eslint-disable-next-line max-len, quotes
  "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"

const section = cx(
  //* Блочная модель
  'pt-[200px] pb-[146px]',
)

const titleContainer = cx(
  //* Блочная модель
  'flex justify-between items-center gap-[100px]',
  'mb-[80px]',
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

const cardContainerClassName = cx(
  //* Блочная модель
  'flex gap-[30px]',
)

const genreCardData = [
  {
    id: 1,
    image: '/images/card-image-action.png',
    link: '#',
    name: 'Action',
  },
  {
    id: 2,
    image: '/images/card-image-adventure.png',
    link: '#',
    name: 'Adventure',
  },
  {
    id: 3,
    image: '/images/card-image-comedy.png',
    link: '#',
    name: 'Comedy',
  },
  {
    id: 4,
    image: '/images/card-image-drama.png',
    link: '#',
    name: 'Drama',
  },
  {
    id: 5,
    image: '/images/card-image-horror.png',
    link: '#',
    name: 'Horror',
  },
]

export const Genres = (): ReactElement => {
  return (
    <section className={section}>
      <div className={titleContainer}>
        <div className={textContainer}>
          <Typography className={titleClassName} element='h2' text={title} type={'TitleBold'} />
          <Typography className={subtitleClassName} element='p' text={subtitle} type={'TextRegular'} />
        </div>
        {/* компонент переключателя */}
        <Switcher />
      </div>

      <div className={cardContainerClassName}>
        {genreCardData.map((card) => (
          <GenreCard image={card.image} key={card.id} name={card.name} />
        ))}
      </div>
    </section>
  )
}
