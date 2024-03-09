import { PopularMoviesResults } from '@/widgets/core/api/getPopularMovies'
import { Poster } from '@/widgets/core/model/BackgroundStore'

const IMAGE_WIDTH = 500
const BASE_IMAGE_URL = `https://image.tmdb.org/t/p/w${IMAGE_WIDTH}`

export const adaptMovieToPoster = ({ title, posterPath }: PopularMoviesResults): Poster => {
  return {
    path: `${BASE_IMAGE_URL}${posterPath}`,
    title,
  }
}
