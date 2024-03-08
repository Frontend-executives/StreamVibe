'use client'

import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ReactElement, useEffect, useState } from 'react'

import { getPopularMovies } from '@/widgets/core/api/getPopularMovies'

const DESKTOP_COLUMNS = 9
const MOBILE_COLUMNS = 3
const ROWS = 4

const container = cx(
  //* Блочная модель
  'grid justify-items-center',
  'mobile:grid-cols-3 after-mobile:grid-cols-9 grid-rows-4',
  'before-desktop:gap-[10px] desktop:gap-[20px]',
  //* Позиционирование
  'absolute top-0 left-0 right-0 z-[-1]',
)
const overlay = cx(
  //* Позиционирование
  'absolute top-0 left-0 right-0 bottom-0 z-[0]',
  //* Оформление
  'bg-black opacity-50',
)
const topShadow = cx(
  //* Блочная модель
  'h-[200px]',
  //* Позиционирование
  'absolute top-0 left-0 right-0 z-[0]',
  //* Оформление
  'bg-gradient-to-b from-ui-black-8',
)
const bottomShadow = cx(
  //* Блочная модель
  'h-[200px]',
  //* Позиционирование
  'absolute bottom-0 left-0 right-0 z-[0]',
  //* Оформление
  'bg-gradient-to-t from-ui-black-8',
)
const image = cx(
  //* Блочная модель
  'w-[100%] aspect-square tablet:aspect-auto rounded-[12px] object-cover',
  //* Позиционирование
  'z-[-1]',
)

export const Background = (): ReactElement | null => {
  const [posters, setPosters] = useState<
    {
      path: string
      title: string
    }[]
  >([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768)
    })
  }, [])

  useEffect(() => {
    const getPosters = async (): Promise<void> => {
      const columns = isMobile ? MOBILE_COLUMNS : DESKTOP_COLUMNS
      const pagesCount = Math.round((ROWS * columns) / 10)
      const pageNumbers = Array.from({ length: pagesCount }, (_, index) => index + 1)
      const requests = pageNumbers.map((page) => getPopularMovies({ page }))
      const moviesArr = await Promise.all(requests)
      const posters = moviesArr
        .map(({ results }) => {
          return results.map(({ poster_path, title }) => ({
            title,
            path: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }))
        })
        .flat(1)
      const slicedPosters = posters.slice(0, ROWS * columns)

      setPosters(slicedPosters)
    }

    getPosters()
  }, [isMobile])

  return (
    <div className={container}>
      <div className={overlay} />
      <div className={topShadow} />
      {posters.map(({ title, path }, index) => (
        <Image
          alt={title}
          blurDataURL={'/images/transparent-logo.svg'}
          className={image}
          draggable={false}
          height={200}
          key={`${title}-${index}`}
          placeholder={'blur'}
          src={path}
          width={200}
        />
      ))}
      <div className={bottomShadow} />
    </div>
  )
}
