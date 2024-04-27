import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement } from 'react'

import { Container } from '@/shared/core/ui/container'
import { Typography } from '@/shared/core/ui/typography'

const containerClassName = cx(
  //* Блочная модель
  'desktop:pt-100px tablet:pt-20 mobile:pt-50px',
  'desktop:pb-50px tablet:pb-10 mobile:pb-5',
  'flex items-center gap-4',
  //* Оформление
  'bg-ui-black-6',
)

const captionClassName = cx(
  //* Оформление
  'text-ui-grey-60',
)

const tmdbLogoClassName = cx(
  //* Блочная модель
  'after-mobile:w-20 mobile:w-16',
)

export const Footer = (): ReactElement => {
  return (
    <Container className={containerClassName} element='footer'>
      <Image alt='TMDB logo' className={tmdbLogoClassName} height={50} src='/images/TMDB.svg' width={100} />
      <Typography
        className={captionClassName}
        text='This product uses the TMDB API but is not endorsed or certified by TMDB'
        type='footerCaption'
      />
    </Container>
  )
}
