import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography'

const cardClassName = cx(
  //* Блочная модель
  'p-[30px] max-w-[295px]',

  'bg-ui-black-10 rounded-r12',
)

const cardContentClassName = cx(
  //* Блочная модель
  'flex justify-between',
)

type CardProps = {
  image: string
  link?: string
  name: string
}

export const GenreCard = ({ name, image }: CardProps): ReactElement => {
  return (
    <div className={cardClassName}>
      <Image alt='card image' height={252} src={image} width={237} />
      <div className={cardContentClassName}>
        <Typography text={name} type='TextRegular' />
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
