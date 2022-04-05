import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '7625d2b726mshfe72513d096d36ap195c32jsn91d03913c14e'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptonNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  })

 
  export const {useGetCryptoNewsQuery} = cryptoNewsApi;