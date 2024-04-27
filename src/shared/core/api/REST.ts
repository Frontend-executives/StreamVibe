import { axiosInstance } from './axiosConfig'

type ResponseData<ResponseType> = {
  data: ResponseType
  success: boolean
}

type RequestData = {
  url: string
}

export const GET = async <ResponseType>({ url }: RequestData): Promise<ResponseData<ResponseType | null>> => {
  try {
    const { data } = await axiosInstance.get<ResponseType>(url)

    return {
      data,
      success: true,
    }
  } catch (error: unknown) {
    return {
      data: null,
      success: false,
    }
  }
}
