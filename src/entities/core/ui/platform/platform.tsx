import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography'

const containerClassName = cx(
  //* Блочная модель
  'flex flex-col',
  'desktop:gap-30px tablet:gap-6 mobile:gap-5',
  'desktop:p-50px tablet:p-10 mobile:p-6',
  //* Оформление
  'border-2 border-ui-black-15 rounded-xl',
  'bg-gradient-to-tr from-50% from-ui-black-0 to-ui-red-10',
)
const headerClassName = cx(
  //* Блочная модель
  'flex items-center flex-wrap',
  'desktop:gap-4 tablet:gap-3 mobile:gap-2.5',
)
const imageWrapperClassName = cx(
  //* Блочная модель
  'flex items-center justify-center shrink-0',
  'desktop:w-[72px] tablet:w-[54px] mobile:w-[44px]',
  'desktop:h-[72px] tablet:h-[54px] mobile:h-[44px]',
  //* Оформление
  'bg-ui-black-8',
  'border-2 border-ui-black-12 desktop:rounded-[12px] tablet:rounded-[10px] mobile:rounded-[8px]',
)
const imageClassName = cx(
  //* Блочная модель
  'desktop:w-[40px] tablet:w-[30px] mobile:w-[24px]',
  'desktop:h-[40px] tablet:h-[30px] mobile:h-[24px]',
)
const textClassName = cx(
  //* Оформление
  'text-ui-grey-60',
)

type PlatformProps = {
  icon: string
  text: string
  title: string
}

export const Platform = ({ icon, text, title }: PlatformProps): ReactElement => {
  return (
    <li className={containerClassName}>
      <header className={headerClassName}>
        <div className={imageWrapperClassName}>
          <Image alt={title} className={imageClassName} height={40} src={icon} width={40} />
        </div>
        <Typography text={title} type={'SubtitleBold'} />
      </header>
      <Typography className={textClassName} text={text} type={'TextRegular'} />
    </li>
  )
}
