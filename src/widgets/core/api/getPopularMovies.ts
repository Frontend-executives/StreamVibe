import { GET } from '@/shared/core/api/REST'

type PopularMoviesResults = {
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

type PopularMovies = {
  page: number
  results: PopularMoviesResults[]
  total_pages: number
  total_results: number
}

type GetPopularMoviesParams = {
  page?: number
}

export const getPopularMovies = async ({ page = 1 }: GetPopularMoviesParams): Promise<PopularMovies> => {
  const { success, data } = await GET<PopularMovies>({ url: `movie/popular?language=en-US&page=${page}` })

  if (!success) {
    throw new Error('Не удалось запросить популярные фильмы')
  }

  return data
}
