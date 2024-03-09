import { makeAutoObservable, runInAction } from 'mobx'

import { getPopularMovies, PopularMovies } from '@/widgets/core/api/getPopularMovies'
import { adaptMovieToPoster } from '@/widgets/core/utils/adaptMovieToPoster'

const DESKTOP_COLUMNS = 9
const MOBILE_COLUMNS = 3
const ROWS = 4
const MOVIES_FROM_API_PAGE = 20

export type Poster = {
  path: string
  title: string
}

export class BackgroundStore {
  posters: Poster[] = []
  animatedPosterIndex: number | null = null
  animationIntervalId: number | null = null

  constructor() {
    makeAutoObservable(this)

    this._getPosters()
  }

  private _checkIsMobile = (): boolean => {
    return window.innerWidth < 768
  }

  private _getColumnsCount = (): number => {
    return this._checkIsMobile() ? MOBILE_COLUMNS : DESKTOP_COLUMNS
  }

  private _getPagesCount = (): number => {
    return Math.ceil((ROWS * this._getColumnsCount()) / MOVIES_FROM_API_PAGE)
  }

  private _getMoviesPromises = (): Promise<PopularMovies>[] => {
    const pagesCount = this._getPagesCount()
    return Array.from({ length: pagesCount }, (_, index) => getPopularMovies({ page: index + 1 }))
  }

  private _adaptMoviesToPosters = (movies: PopularMovies[]): Poster[] => {
    return movies.flatMap(({ results }) => results.map(adaptMovieToPoster)).slice(0, ROWS * this._getColumnsCount())
  }

  private _getPosters = async (): Promise<void> => {
    const moviesPromises = await this._getMoviesPromises()
    const movies = await Promise.all(moviesPromises)
    const posters = this._adaptMoviesToPosters(movies)

    runInAction((): void => {
      this.posters = posters

      this.setAnimation()
    })
  }

  setAnimation = (): void => {
    this.animationIntervalId = setInterval(() => {
      runInAction(() => {
        this.animatedPosterIndex = Math.floor(Math.random() * this.posters.length)
      })
    }, 2000) as unknown as number
  }

  destroyAnimation = (): void => {
    if (this.animationIntervalId) {
      clearInterval(this.animationIntervalId)
      this.animationIntervalId = null
    }
  }
}
