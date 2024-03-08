import { makeAutoObservable, runInAction } from 'mobx'

import { getPopularMovies, PopularMovies } from '@/widgets/core/api/getPopularMovies'

const DESKTOP_COLUMNS = 9
const MOBILE_COLUMNS = 3
const ROWS = 4
const MOVIES_FROM_API_PAGE = 20
const IMAGE_WIDTH = 500
const BASE_IMAGE_URL = `https://image.tmdb.org/t/p/w${IMAGE_WIDTH}`

type Posters = {
  path: string
  title: string
}

export class BackgroundStore {
  posters: Posters[] = []

  constructor() {
    this._getPosters()
    makeAutoObservable(this)
  }

  private _checkIsMobile = (): boolean => {
    return window.innerWidth < 768
  }

  private _getColumnsCount = (): number => {
    return this._checkIsMobile() ? MOBILE_COLUMNS : DESKTOP_COLUMNS
  }

  private _getPagesCount = (): number => {
    return Math.round((ROWS * this._getColumnsCount()) / MOVIES_FROM_API_PAGE)
  }

  private _getMoviesCountArr = (): number[] => {
    return Array.from({ length: this._getPagesCount() }, (_, index) => index + 1)
  }

  private _getMoviesPromises = async (): Promise<Promise<PopularMovies>[]> => {
    return this._getMoviesCountArr().map((count) => getPopularMovies({ page: count }))
  }

  private _adaptMoviesToPosters = (movies: PopularMovies[]): Posters[] => {
    return movies
      .map(({ results }) => {
        return results.map(({ poster_path, title }) => {
          return {
            path: `${BASE_IMAGE_URL}${poster_path}`,
            title,
          }
        })
      })
      .flat(1)
      .slice(0, ROWS * this._getColumnsCount())
  }

  private _getPosters = async (): Promise<void> => {
    const moviesPromises = await this._getMoviesPromises()
    const movies = await Promise.all(moviesPromises)
    const posters = this._adaptMoviesToPosters(movies)

    runInAction((): void => {
      this.posters = posters
    })
  }
}
