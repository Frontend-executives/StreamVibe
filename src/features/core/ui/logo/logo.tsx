import { cx } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

const link = cx('select-none hover:opacity-80 transition-opacity shrink-0')
const logo = cx('mobile:w-[116px] mobile:h-[36px] tablet:w-[166px] tablet:h-[50px] desktop:w-[200px] desktop:h-[60px]')

export const Logo = (): ReactElement => {
  return (
    <Link className={link} href='/public'>
      <Image
        alt='StreamVibe logo'
        className={logo}
        draggable={false}
        height={60}
        priority={true}
        src='/images/logo.svg'
        width={200}
      />
    </Link>
  )
}
