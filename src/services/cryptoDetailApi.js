import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'e53e2ef485mshfbcb69af9d7a538p11c32ejsn068502999d52'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers : cryptoApiHeaders})
export const cryptoApi = createApi({
    reducer : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}
    ),
    endpoints : (builder) => ({
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      })
    })
  })

  export const {
    useGetCryptoDetailsQuery
  } = cryptoApi