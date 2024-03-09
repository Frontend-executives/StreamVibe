import { GET } from '@/shared/core/api/REST'
import { keysToCamel } from '@/shared/core/utils/keysToCamel'

type PopularMoviesResultsRaw = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type PopularMoviesRaw = {
  page: number
  results: PopularMoviesResultsRaw[]
  total_pages: number
  total_results: number
}

export type PopularMoviesResults = {
  adult: boolean
  backdropPath: string
  genreIds: number[]
  id: number
  originalLanguage: string
  originalTitle: string
  overview: string
  popularity: number
  posterPath: string
  releaseDate: string
  title: string
  video: boolean
  voteAverage: number
  voteCount: number
}

export type PopularMovies = {
  page: number
  results: PopularMoviesResults[]
  totalPages: number
  totalResults: number
}

type GetPopularMoviesParams = {
  page?: number
}

export const getPopularMovies = async ({ page = 1 }: GetPopularMoviesParams): Promise<PopularMovies | never> => {
  const { success, data } = await GET<PopularMoviesRaw>({ url: `movie/popular?language=en-US&page=${page}` })

  if (!success) {
    throw new Error('Не удалось запросить популярные фильмы')
  }

  return keysToCamel<PopularMovies>(data)
}
