import axios, { AxiosRequestConfig } from 'axios'

//! NON SECRET PUBLIC API TOKEN
const TMDB_TOKEN =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWYyYjMwYTlmNDM2OGExZDczNDczMDFhNGMwMWUxZCIsInN1YiI6IjY1MTgwNDkyOWQ1OTJjMDBjOGMyYTczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q04van-eiegersqruTQPBzY5lhfwfEtn7obSNGWOhQk'

const createConfig = (): AxiosRequestConfig => {
  return {
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  }
}

export const axiosInstance = axios.create(createConfig())
