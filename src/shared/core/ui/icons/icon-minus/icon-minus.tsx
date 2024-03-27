import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement } from 'react'

const imageClassName = cx(
  //* Блочная модель
  'desktop:w-30px before-desktop:w-6',
  'desktop:h-30px before-desktop:w-6',
)

export const IconMinus = (): ReactElement => {
  return <Image alt='minus icon' className={imageClassName} height={30} src='/icons/minus.svg' width={30} />
}
