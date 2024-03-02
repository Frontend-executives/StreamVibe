import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

const link = 'select-none hover:opacity-80 transition-opacity'
const logo = 'mobile:w-[116px] mobile:h-[36px] tablet:w-[166px] tablet:h-[50px] desktop:w-[200px] desktop:h-[60px]'

export const Logo = (): ReactElement => {
  return (
    <Link className={link} href='/'>
      <Image alt='logo' className={logo} draggable={false} height={60} priority={true} src='/logo.svg' width={200} />
    </Link>
  )
}
