'use client'

import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement } from 'react'

import { Button } from '@/shared/core/ui/button'
import { Typography } from '@/shared/core/ui/typography'

const title = 'The Best Streaming Experience'
const text =
  // eslint-disable-next-line max-len
  'StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.'

const section = cx(
  //* Блочная модель
  'desktop:pt-[196px] tablet:pt-[200px] mobile:pt-[150px]',
  'flex flex-col items-center justify-center',
)
const image = cx(
  //* Блочная модель
  'desktop:w-[470px] tablet:w-[300px] mobile:w-[200px] desktop:h-[470px] tablet:h-[300px] mobile:h-[200px]',
  'desktop:mb-[130px] tablet:mb-[100px] mobile:mb-[50px]',
)
const titleClassName = cx(
  //* Блочная модель
  'desktop:mb-[16px] before-desktop:mb-[10px]',
  //* Типографика
  'text-center',
)
const textClassName = cx(
  //* Блочная модель
  'desktop:mb-[50px] tablet:mb-[40px] mobile:mb-[30px]',
  //* Оформление
  'text-ui-grey-60',
  //* Типографика
  'text-center',
)

export const About = (): ReactElement => {
  return (
    <section className={section}>
      <Image alt={'transparent logo'} className={image} height={470} src={'/images/transparent-logo.svg'} width={470} />
      <Typography className={titleClassName} text={title} type={'HeadingBold'} />
      <Typography className={textClassName} text={text} type={'TextRegular'} />
      <Button onClick={() => {}} text={'Start Watching Now'} type={'primary'} />
    </section>
  )
}
