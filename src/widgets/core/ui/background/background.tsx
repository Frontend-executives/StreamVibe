'use client'

import { cva, cx } from 'class-variance-authority'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { ReactElement, useEffect, useMemo } from 'react'

import { BackgroundStore } from '@/widgets/core/model/BackgroundStore'

const containerClassName = cx(
  //* Блочная модель
  'grid justify-items-center',
  'mobile:grid-cols-3 after-mobile:grid-cols-9 grid-rows-4',
  'before-desktop:gap-[10px] desktop:gap-[20px]',
  //* Позиционирование
  'absolute top-0 left-0 right-0 z-[-1]',
)
const overlayClassName = cx(
  //* Позиционирование
  'absolute top-0 left-0 right-0 bottom-0 z-[0]',
  //* Оформление
  'bg-black opacity-50',
)
const topShadowClassName = cx(
  //* Блочная модель
  'h-[200px]',
  //* Позиционирование
  'absolute top-0 left-0 right-0 z-[0]',
  //* Оформление
  'bg-gradient-to-b from-ui-black-8',
)
const bottomShadowClassName = cx(
  //* Блочная модель
  'h-[200px]',
  //* Позиционирование
  'absolute bottom-0 left-0 right-0 z-[0]',
  //* Оформление
  'bg-gradient-to-t from-ui-black-8',
)
const staticImageClassName = cx(
  //* Блочная модель
  'w-[100%] aspect-square tablet:aspect-auto rounded-[12px] object-cover',
  //* Позиционирование
  'z-[-1]',
)
const imageClassName = cva(staticImageClassName, {
  variants: {
    isAnimated: {
      true: 'animate-pulse',
      false: '',
    },
  },
  defaultVariants: {
    isAnimated: false,
  },
})

const PlaceholderPath = '/images/transparent-logo.svg'
const IMAGE_SIZE = 200

export const Background = observer((): ReactElement | null => {
  const { posters, animatedPosterIndex, destroyAnimation } = useMemo(() => new BackgroundStore(), [])

  useEffect(() => {
    return () => destroyAnimation()
  }, [destroyAnimation])

  return (
    <div className={containerClassName}>
      <div className={overlayClassName} />
      <div className={topShadowClassName} />
      {posters.map(({ title, path }, index) => (
        <Image
          alt={title}
          blurDataURL={PlaceholderPath}
          className={imageClassName({
            isAnimated: index === animatedPosterIndex,
          })}
          draggable={false}
          height={IMAGE_SIZE}
          key={`${title}-${index}`}
          placeholder={'blur'}
          src={path}
          width={IMAGE_SIZE}
        />
      ))}
      <div className={bottomShadowClassName} />
    </div>
  )
})
