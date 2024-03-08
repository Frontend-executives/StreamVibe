import axios, { AxiosRequestConfig } from 'axios'

const createConfig = (): AxiosRequestConfig => {
  return {
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        // eslint-disable-next-line max-len
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWYyYjMwYTlmNDM2OGExZDczNDczMDFhNGMwMWUxZCIsInN1YiI6IjY1MTgwNDkyOWQ1OTJjMDBjOGMyYTczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q04van-eiegersqruTQPBzY5lhfwfEtn7obSNGWOhQk',
    },
  }
}

export const axiosInstance = axios.create(createConfig())
