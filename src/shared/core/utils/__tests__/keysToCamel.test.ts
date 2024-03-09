import { keysToCamel } from '@/shared/core/utils/keysToCamel'

describe('keysToCamel', () => {
  it('should change keys from snake to camel correctly', () => {
    const result = keysToCamel({
      page: 1,
      total_pages: 42887,
      total_results: 857733,
      results: [
        {
          adult: false,
          backdrop_path: '/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg',
          genre_ids: [28, 27, 53],
          id: 1096197,
          original_language: 'en',
          original_title: 'No Way Up',
          overview: 'Some overview',
          popularity: 1511.655,
          poster_path: '/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg',
          release_date: '2024-01-18',
          title: 'No Way Up',
          video: false,
          vote_average: 5.7,
          vote_count: 129,
        },
      ],
    })

    expect(result).toStrictEqual({
      page: 1,
      totalPages: 42887,
      totalResults: 857733,
      results: [
        {
          adult: false,
          backdropPath: '/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg',
          genreIds: [28, 27, 53],
          id: 1096197,
          originalLanguage: 'en',
          originalTitle: 'No Way Up',
          overview: 'Some overview',
          popularity: 1511.655,
          posterPath: '/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg',
          releaseDate: '2024-01-18',
          title: 'No Way Up',
          video: false,
          voteAverage: 5.7,
          voteCount: 129,
        },
      ],
    })
  })

  it('should return initial value in incorrect cases', () => {
    expect(keysToCamel({})).toStrictEqual({})
    expect(keysToCamel([])).toStrictEqual([])
    expect(keysToCamel(null)).toBe(null)
    expect(keysToCamel(undefined)).toBe(undefined)
  })
})
