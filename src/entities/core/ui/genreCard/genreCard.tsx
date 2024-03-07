import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography'

const cardClassName = cx(
  //* Блочная модель
  'p-[30px] max',
)

const cardContentClassName = cx(
  //* Блочная модель
  'flex justify-between',
)

export const GenreCard = (): ReactElement => {
  return (
    <div className={cardClassName}>
      <div className={cardContentClassName}>
        <Typography text='123' type='TextRegular' />
        <Image
          alt='card arrow'
          className='card__arrow'
          draggable={false}
          height={16}
          src='/images/genre-card-arrow.svg'
          width={18}
        />
      </div>
    </div>
  )
}
