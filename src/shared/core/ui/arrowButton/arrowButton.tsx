import { cx, cva } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement } from 'react'

const wrapperClassName = cx(
  //
  'p-[16px]',

  //
  'bg-ui-black-10 rounded-r8',
)

const arrowImageClassName = cva([], {
  variants: {
    isPrev: {
      true: 'rotate-180',
    },
  },
})

type ArrowButtonType = {
  type: 'prev' | 'next'
}

export const ArrowButton = ({ type }: ArrowButtonType): ReactElement => {
  const isPrev = type === 'prev'
  return (
    <div className={wrapperClassName}>
      <Image
        alt=''
        className={arrowImageClassName({ isPrev: isPrev })}
        height={28}
        src='/images/genre-card-arrow.svg'
        width={28}
      />
    </div>
  )
}
