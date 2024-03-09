import { adaptMovieToPoster } from '@/widgets/core/utils/adaptMovieToPoster'

describe('adaptMovieToPoster', () => {
  it('should adapt movie correctly', () => {
    const poster = adaptMovieToPoster({
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
    })

    expect(poster).toStrictEqual({
      title: 'No Way Up',
      path: 'https://image.tmdb.org/t/p/w500/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg',
    })
  })
})
